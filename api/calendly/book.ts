import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { bookingSchema, type BookingInput } from "../_lib/booking-schema";

const CALCOM_API_KEY = process.env.CALCOM_API_KEY;
const CALCOM_EVENT_TYPE_ID = process.env.CALCOM_EVENT_TYPE_ID;
const CALCOM_API_URL = "https://api.cal.com/v2";
const CALCOM_TIMEOUT_MS = 10000;

const calcomHeaders = {
  Authorization: `Bearer ${CALCOM_API_KEY}`,
  "cal-api-version": "2024-08-13",
  "Content-Type": "application/json",
};

// Build the confirmation object returned to the client (used for both real
// bookings and honeypot fake-success responses).
function buildConfirmation(startTime: string, name: string, email: string, uri?: string) {
  const eventTime = new Date(startTime);
  return {
    uri,
    email,
    name,
    startTime,
    formattedDate: eventTime.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Manila",
    }),
    formattedTime: eventTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Manila",
    }),
  };
}

const SUCCESS_MESSAGE =
  "Booking confirmed! A confirmation email has been sent to your email address.";

// CREATE BOOKING - Direct API booking without redirect
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!CALCOM_API_KEY) {
    return res.status(500).json({ success: false, error: "Cal.com API key not configured" });
  }

  if (!CALCOM_EVENT_TYPE_ID) {
    return res.status(500).json({ success: false, error: "Cal.com Event Type ID not configured" });
  }

  // Vercel may deliver req.body as a raw string (or undefined) depending on
  // content-type. Normalize to an object WITHOUT throwing before we hand it
  // to zod — a thrown error here is what produced FUNCTION_INVOCATION_FAILED.
  let rawBody: unknown = req.body;
  if (typeof rawBody === "string") {
    try {
      rawBody = JSON.parse(rawBody);
    } catch {
      return res.status(400).json({ success: false, error: "Invalid input" });
    }
  }
  if (rawBody === null || typeof rawBody !== "object") {
    return res.status(400).json({ success: false, error: "Invalid input" });
  }

  // Validate + length-cap the public input. Never echo the raw zod error to
  // the client; log it server-side only.
  const parsed = bookingSchema.safeParse(rawBody);
  if (!parsed.success) {
    console.error("Booking validation failed:", parsed.error.flatten());
    return res.status(400).json({ success: false, error: "Invalid input" });
  }

  const data: BookingInput = parsed.data;
  const { startTime, name, email, phone, company, service, message, company_url } = data;

  // Honeypot: if the hidden field is filled, it's a bot. Return a normal-looking
  // success WITHOUT contacting Cal.com so the bot believes it succeeded.
  if (company_url && company_url.trim() !== "") {
    console.error("Booking rejected: honeypot triggered");
    return res.json({
      success: true,
      booking: buildConfirmation(startTime, name, email),
      message: SUCCESS_MESSAGE,
    });
  }

  try {
    // Format phone to E.164 if it's a Philippine number (Cal.com wants E.164)
    let phoneNumber: string | undefined;
    if (phone) {
      let formattedPhone = phone.replace(/\s+/g, "").replace(/-/g, "");
      if (formattedPhone.startsWith("0")) {
        formattedPhone = "+63" + formattedPhone.substring(1);
      } else if (!formattedPhone.startsWith("+")) {
        formattedPhone = "+63" + formattedPhone;
      }
      phoneNumber = formattedPhone;
    }

    // Stash the extra form fields in metadata (string values only; skip empties).
    const metadata: Record<string, string> = {};
    if (company) metadata.company = company;
    if (service) metadata.service = service;
    if (message) metadata.message = message;

    const bookingData: {
      eventTypeId: number;
      start: string;
      attendee: { name: string; email: string; timeZone: string; phoneNumber?: string };
      metadata?: Record<string, string>;
    } = {
      eventTypeId: Number(CALCOM_EVENT_TYPE_ID),
      start: startTime,
      attendee: {
        name,
        email,
        timeZone: "Asia/Manila",
        ...(phoneNumber ? { phoneNumber } : {}),
      },
      ...(Object.keys(metadata).length > 0 ? { metadata } : {}),
    };

    console.log("Booking received for startTime:", startTime);

    const response = await axios.post(`${CALCOM_API_URL}/bookings`, bookingData, {
      headers: calcomHeaders,
      timeout: CALCOM_TIMEOUT_MS,
    });

    // Cal.com success shape: { status: "success", data: { uid, ... } }
    const bookingResult = response.data?.data || response.data;

    res.json({
      success: true,
      booking: buildConfirmation(startTime, name, email, bookingResult?.uid),
      message: SUCCESS_MESSAGE,
    });
  } catch (error: any) {
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      console.error("Booking request to Cal.com timed out:", error.message);
      return res.status(504).json({ success: false, error: "Service temporarily unavailable" });
    }

    const status = error.response?.status;
    const errorData = error.response?.data;

    // Log the real Cal.com error server-side only.
    console.error("Booking error:", errorData || error.message);

    // Slot-taken is the one case that's safe + useful to surface to the user.
    const calcomMessage = String(
      errorData?.error?.message || errorData?.message || "",
    ).toLowerCase();
    const slotTaken =
      (status === 400 || status === 409) &&
      (calcomMessage.includes("available") ||
        calcomMessage.includes("already") ||
        calcomMessage.includes("booked") ||
        calcomMessage.includes("no_available"));

    if (slotTaken) {
      return res.status(409).json({
        success: false,
        error: "That time is no longer available, please pick another slot.",
      });
    }

    res.status(status || 500).json({
      success: false,
      error: "Failed to create booking. Please try again.",
    });
  }
}
