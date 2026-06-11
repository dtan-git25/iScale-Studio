import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

// Schema is defined inline (not imported from api/_lib) so this function has
// no cross-directory dependency to resolve at cold start — see root-cause note.
// Length caps prevent oversized payloads being forwarded to Cal.com / logged.
const bookingSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(20).optional(),
  company: z.string().max(150).optional(),
  service: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  // Must be a parseable ISO date string (Cal.com slot start).
  startTime: z
    .string()
    .refine((s) => !Number.isNaN(Date.parse(s)), {
      message: "startTime must be a valid ISO date",
    }),
  // Honeypot: real users never fill this; bots that auto-fill every field will.
  company_url: z.string().max(200).optional(),
});

type BookingInput = z.infer<typeof bookingSchema>;

const CALCOM_API_KEY = process.env.CALCOM_API_KEY;
const CALCOM_EVENT_TYPE_ID = process.env.CALCOM_EVENT_TYPE_ID;
const CALCOM_API_URL = "https://api.cal.com/v2";
const CALCOM_TIMEOUT_MS = 10000;
// Pinned Cal.com API version for the bookings endpoint. Bump deliberately when
// migrating — a silent drift here can change the request/response schema.
const CALCOM_BOOKINGS_API_VERSION = "2024-08-13";

const calcomHeaders = {
  Authorization: `Bearer ${CALCOM_API_KEY}`,
  "cal-api-version": CALCOM_BOOKINGS_API_VERSION,
  "Content-Type": "application/json",
};

// Build the confirmation object returned to the client (used for both real
// bookings and honeypot fake-success responses). Never throws: an unparseable
// date yields "Invalid Date" strings rather than crashing.
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

const GENERIC_ERROR = "Failed to create booking. Please try again.";

// Send JSON only if nothing has been sent yet (prevents a double-send throw
// from the outer safety net).
function safeJson(res: VercelResponse, status: number, body: unknown) {
  if (!res.headersSent) {
    res.status(status).json(body);
  }
}

// fetch with a hard 10s timeout via AbortController. On timeout the fetch
// rejects with an AbortError (name === "AbortError"); the timer is always
// cleared in finally. Any other rejection is a network failure.
async function fetchWithTimeout(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CALCOM_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

// CREATE BOOKING - Direct API booking without redirect
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Outermost safety net: ANY unexpected throw (in our code OR in the error
  // handler itself) returns clean JSON instead of crashing the runtime with
  // FUNCTION_INVOCATION_FAILED.
  try {
    if (req.method !== "POST") {
      return safeJson(res, 405, { success: false, error: "Method not allowed" });
    }

    if (!CALCOM_API_KEY) {
      return safeJson(res, 500, { success: false, error: "Cal.com API key not configured" });
    }

    if (!CALCOM_EVENT_TYPE_ID) {
      return safeJson(res, 500, { success: false, error: "Cal.com Event Type ID not configured" });
    }

    // Vercel may deliver req.body as a raw string (or undefined) depending on
    // content-type. Normalize to an object WITHOUT throwing before zod.
    let rawBody: unknown = req.body;
    if (typeof rawBody === "string") {
      try {
        rawBody = JSON.parse(rawBody);
      } catch {
        return safeJson(res, 400, { success: false, error: "Invalid input" });
      }
    }
    if (rawBody === null || typeof rawBody !== "object") {
      return safeJson(res, 400, { success: false, error: "Invalid input" });
    }

    // Validate + length-cap the public input. Never echo the raw zod error to
    // the client; log it server-side only.
    const parsed = bookingSchema.safeParse(rawBody);
    if (!parsed.success) {
      console.error("Booking validation failed:", parsed.error.flatten());
      return safeJson(res, 400, { success: false, error: "Invalid input" });
    }

    const data: BookingInput = parsed.data;
    const { startTime, name, email, phone, company, service, message, company_url } = data;

    // Honeypot: if the hidden field is filled, it's a bot. Return a normal-looking
    // success WITHOUT contacting Cal.com so the bot believes it succeeded.
    if (company_url && company_url.trim() !== "") {
      console.error("Booking rejected: honeypot triggered");
      return safeJson(res, 200, {
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

      // Compose a single host-visible notes string and send it via the booking's
      // "Additional notes" field (slug "notes") in bookingFieldsResponses. This is
      // what the host sees in the Cal.com dashboard and has no practical length cap.
      // NOTE: metadata is host-INVISIBLE and value-capped (500 chars), so the
      // free-text message must NOT rely on it.
      const notesParts: string[] = [];
      if (service) notesParts.push(`Service: ${service}`);
      if (company) notesParts.push(`Company: ${company}`);
      if (message) notesParts.push(`Message: ${message}`);
      const notes = notesParts.join("\n");

      // Keep only short, bounded tags in metadata (each well under the 500-char
      // cap) for programmatic filtering — never the free-text message.
      const metadata: Record<string, string> = {};
      if (service) metadata.service = service;
      if (company) metadata.company = company;

      const bookingData: {
        eventTypeId: number;
        start: string;
        attendee: { name: string; email: string; timeZone: string; phoneNumber?: string };
        bookingFieldsResponses?: Record<string, string>;
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
        ...(notes ? { bookingFieldsResponses: { notes } } : {}),
        ...(Object.keys(metadata).length > 0 ? { metadata } : {}),
      };

      console.log("Booking received for startTime:", startTime);

      const response = await fetchWithTimeout(`${CALCOM_API_URL}/bookings`, {
        method: "POST",
        headers: calcomHeaders,
        body: JSON.stringify(bookingData),
      });

      // fetch does not throw on non-2xx — inspect status + body explicitly (this
      // logic previously lived in the axios catch block).
      if (!response.ok) {
        // Read the error body defensively for slot-taken detection + server log.
        let errorData: any = undefined;
        try {
          errorData = await response.json();
        } catch {
          errorData = undefined;
        }

        // Log the real Cal.com error server-side only.
        console.error("Booking error: upstream status", response.status, errorData ?? "");

        // Slot-taken is the one case that's safe + useful to surface to the user.
        const calcomMessage = String(
          errorData?.error?.message ?? errorData?.message ?? "",
        ).toLowerCase();
        const slotTaken =
          (response.status === 400 || response.status === 409) &&
          (calcomMessage.includes("available") ||
            calcomMessage.includes("already") ||
            calcomMessage.includes("booked") ||
            calcomMessage.includes("no_available"));

        if (slotTaken) {
          return safeJson(res, 409, {
            success: false,
            error: "That time is no longer available, please pick another slot.",
          });
        }

        // Normalize any other upstream status (401/403/429/5xx) to 502 — never
        // pass the raw upstream status through to the client.
        return safeJson(res, 502, { success: false, error: GENERIC_ERROR });
      }

      // 2xx — parse defensively. A non-JSON body must not throw; treat as empty
      // (matches the prior axios behavior: 200 success with an undefined uri).
      let payload: any = {};
      try {
        payload = await response.json();
      } catch {
        payload = {};
      }

      // Cal.com success shape: { status: "success", data: { id, uid, start, ... } }
      // Read every field defensively — the booking is nested under data.
      const result = payload?.data ?? payload ?? {};
      const bookingId = result?.uid ?? result?.id;
      const confirmStart =
        typeof result?.start === "string" && result.start ? result.start : startTime;

      return safeJson(res, 200, {
        success: true,
        booking: buildConfirmation(
          confirmStart,
          name,
          email,
          bookingId != null ? String(bookingId) : undefined,
        ),
        message: SUCCESS_MESSAGE,
      });
    } catch (error: any) {
      if (error?.name === "AbortError") {
        console.error("Booking request to Cal.com timed out");
        return safeJson(res, 504, { success: false, error: "Service temporarily unavailable" });
      }

      // Network failure or other rejection — log server-side, return generic message.
      console.error("Booking error:", error?.message ?? error);
      return safeJson(res, 500, { success: false, error: GENERIC_ERROR });
    }
  } catch (fatal: any) {
    // Last-resort guard: anything that slipped past the inner handling.
    console.error("Unhandled booking error:", fatal?.message ?? fatal);
    return safeJson(res, 500, { success: false, error: GENERIC_ERROR });
  }
}
