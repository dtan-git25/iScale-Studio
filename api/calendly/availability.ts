import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const CALCOM_API_KEY = process.env.CALCOM_API_KEY;
const CALCOM_EVENT_TYPE_ID = process.env.CALCOM_EVENT_TYPE_ID;
const CALCOM_API_URL = "https://api.cal.com/v2";
const CALCOM_TIMEOUT_MS = 10000;
// Pinned Cal.com API version for the slots endpoint. Bump deliberately when
// migrating — a silent drift here can change the response shape.
const CALCOM_SLOTS_API_VERSION = "2024-09-04";

const calcomHeaders = {
  Authorization: `Bearer ${CALCOM_API_KEY}`,
  "cal-api-version": CALCOM_SLOTS_API_VERSION,
  "Content-Type": "application/json",
};

// Send JSON only if nothing has been sent yet (prevents a double-send throw
// from the outer safety net).
function safeJson(res: VercelResponse, status: number, body: unknown) {
  if (!res.headersSent) {
    res.status(status).json(body);
  }
}

// GET AVAILABLE SLOTS FOR A DATE
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Outermost safety net: ANY unexpected throw returns clean JSON instead of
  // crashing the runtime with FUNCTION_INVOCATION_FAILED.
  try {
    if (req.method !== "GET") {
      return safeJson(res, 405, { success: false, error: "Method not allowed" });
    }

    if (!CALCOM_API_KEY) {
      return safeJson(res, 500, { success: false, error: "Cal.com API key not configured" });
    }

    if (!CALCOM_EVENT_TYPE_ID) {
      return safeJson(res, 500, { success: false, error: "Cal.com Event Type ID not configured" });
    }

    const date = Array.isArray(req.query.date) ? req.query.date[0] : req.query.date;

    if (!date) {
      return safeJson(res, 400, { success: false, error: "Date parameter required" });
    }

    // Validate the date format before forwarding it to Cal.com.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return safeJson(res, 400, { success: false, error: "Invalid date" });
    }

    try {
      const response = await axios.get(`${CALCOM_API_URL}/slots`, {
        headers: calcomHeaders,
        params: {
          eventTypeId: Number(CALCOM_EVENT_TYPE_ID),
          start: date,
          end: date,
        },
        timeout: CALCOM_TIMEOUT_MS,
      });

      // Cal.com shape: { data: { "YYYY-MM-DD": [ { start: "2026-06-23T01:00:00.000Z" }, ... ] } }
      const dataObj: Record<string, Array<{ start?: string; time?: string }>> =
        response?.data?.data || {};

      // Prefer the requested date's bucket; fall back to flattening all keys in
      // case Cal.com buckets a slot under an adjacent (UTC) date.
      const rawSlots = Array.isArray(dataObj[date])
        ? dataObj[date]
        : Object.values(dataObj).flat();

      const slots = rawSlots
        .map((slot) => slot.start || slot.time)
        .filter((raw): raw is string => Boolean(raw))
        .map((raw) => ({
          time: new Date(raw).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            timeZone: "Asia/Manila",
          }),
          available: true,
          rawTime: raw,
          schedulingUrl: undefined as string | undefined,
        }));

      // Cache successful slot results at the Vercel edge ~60s (per-date, since the
      // date is in the query string). A just-booked slot may show available for up
      // to 60s — fine, the book endpoint handles the slot-taken case. Errors are
      // never cached (this header is only set on the success path).
      res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");
      return safeJson(res, 200, { success: true, slots });
    } catch (error: any) {
      if (error?.code === "ECONNABORTED" || error?.code === "ETIMEDOUT") {
        console.error("Availability request to Cal.com timed out:", error?.message);
        return safeJson(res, 504, { success: false, error: "Service temporarily unavailable" });
      }

      // Log the real Cal.com error server-side only; return a generic message.
      console.error("Error fetching availability:", error?.response?.data ?? error?.message ?? error);
      return safeJson(res, 500, { success: false, error: "Failed to fetch availability" });
    }
  } catch (fatal: any) {
    // Last-resort guard: anything that slipped past the inner handling.
    console.error("Unhandled availability error:", fatal?.message ?? fatal);
    return safeJson(res, 500, { success: false, error: "Failed to fetch availability" });
  }
}
