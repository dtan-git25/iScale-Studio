import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const CALCOM_API_KEY = process.env.CALCOM_API_KEY;
const CALCOM_EVENT_TYPE_ID = process.env.CALCOM_EVENT_TYPE_ID;
const CALCOM_API_URL = "https://api.cal.com/v2";
const CALCOM_TIMEOUT_MS = 10000;

const calcomHeaders = {
  Authorization: `Bearer ${CALCOM_API_KEY}`,
  "cal-api-version": "2024-09-04",
  "Content-Type": "application/json",
};

// GET AVAILABLE SLOTS FOR A DATE
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!CALCOM_API_KEY) {
    return res.status(500).json({ success: false, error: "Cal.com API key not configured" });
  }

  if (!CALCOM_EVENT_TYPE_ID) {
    return res.status(500).json({ success: false, error: "Cal.com Event Type ID not configured" });
  }

  const date = Array.isArray(req.query.date) ? req.query.date[0] : req.query.date;

  if (!date) {
    return res.status(400).json({ success: false, error: "Date parameter required" });
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
      response.data?.data || {};

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

    res.json({ success: true, slots });
  } catch (error: any) {
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      console.error("Availability request to Cal.com timed out:", error.message);
      return res.status(504).json({ success: false, error: "Service temporarily unavailable" });
    }

    // Log the real Cal.com error server-side only; return a generic message.
    console.error("Error fetching availability:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch availability",
    });
  }
}
