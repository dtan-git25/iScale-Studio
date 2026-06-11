import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { bookingSchema, type BookingInput } from "../_lib/booking-schema";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
const CALENDLY_EVENT_TYPE_URI = process.env.CALENDLY_EVENT_TYPE_URI;
const CALENDLY_API_URL = "https://api.calendly.com";
const CALENDLY_TIMEOUT_MS = 10000;

const calendlyHeaders = {
  Authorization: `Bearer ${CALENDLY_API_KEY}`,
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

  if (!CALENDLY_API_KEY) {
    return res.status(500).json({ success: false, error: "Calendly API key not configured" });
  }

  if (!CALENDLY_EVENT_TYPE_URI) {
    return res.status(500).json({ success: false, error: "Calendly Event Type URI not configured" });
  }

  // Validate + length-cap the public input. Never echo the raw zod error to
  // the client; log it server-side only.
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) {
    console.error("Booking validation failed:", parsed.error.flatten());
    return res.status(400).json({ success: false, error: "Invalid input" });
  }

  const data: BookingInput = parsed.data;
  const { startTime, name, email, phone, company, service, message, company_url } = data;

  // Honeypot: if the hidden field is filled, it's a bot. Return a normal-looking
  // success WITHOUT contacting Calendly so the bot believes it succeeded.
  if (company_url && company_url.trim() !== "") {
    console.error("Booking rejected: honeypot triggered");
    return res.json({
      success: true,
      booking: buildConfirmation(startTime, name, email),
      message: SUCCESS_MESSAGE,
    });
  }

  try {
    // Build booking payload for POST /invitees endpoint
    const bookingData = {
      event_type: CALENDLY_EVENT_TYPE_URI,
      start_time: startTime,
      invitee: {
        name,
        email,
        timezone: "Asia/Manila",
      } as {
        name: string;
        email: string;
        timezone: string;
        text_reminder_number?: string;
      },
      // CRITICAL: Must match event type's configured location
      location: {
        kind: "zoom_conference",
      },
    } as {
      event_type: string;
      start_time: string;
      invitee: {
        name: string;
        email: string;
        timezone: string;
        text_reminder_number?: string;
      };
      location: { kind: string };
      questions_and_answers?: Array<{ question: string; answer: string; position: number }>;
    };

    // Add phone number if provided for SMS reminders (must be E.164 format)
    if (phone) {
      // Format phone to E.164 if it's a Philippine number
      let formattedPhone = phone.replace(/\s+/g, "").replace(/-/g, "");
      if (formattedPhone.startsWith("0")) {
        formattedPhone = "+63" + formattedPhone.substring(1);
      } else if (!formattedPhone.startsWith("+")) {
        formattedPhone = "+63" + formattedPhone;
      }
      bookingData.invitee.text_reminder_number = formattedPhone;
    }

    // Add custom question answer - combine all info into the one configured question
    // The exact question text in Calendly: "Please share anything that will help prepare for our meeting."
    const answerParts: string[] = [];
    if (company) {
      answerParts.push(`Company: ${company}`);
    }
    if (service) {
      answerParts.push(`Service Interest: ${service}`);
    }
    if (message) {
      answerParts.push(`Project Details: ${message}`);
    }

    if (answerParts.length > 0) {
      bookingData.questions_and_answers = [{
        question: "Please share anything that will help prepare for our meeting.",
        answer: answerParts.join("\n"),
        position: 0,
      }];
    }

    console.log("Booking received for startTime:", startTime);

    const response = await axios.post(
      `${CALENDLY_API_URL}/invitees`,
      bookingData,
      { headers: calendlyHeaders, timeout: CALENDLY_TIMEOUT_MS },
    );

    // Extract booking details for confirmation
    const bookingResult = response.data.resource || response.data;

    res.json({
      success: true,
      booking: buildConfirmation(startTime, name, email, bookingResult.uri),
      message: SUCCESS_MESSAGE,
    });
  } catch (error: any) {
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      console.error("Booking request to Calendly timed out:", error.message);
      return res.status(504).json({ success: false, error: "Service temporarily unavailable" });
    }

    // Log the real Calendly error server-side only; return a generic message.
    console.error("Booking error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      error: "Failed to create booking. Please try again.",
    });
  }
}
