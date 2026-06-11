import type { VercelRequest, VercelResponse } from "@vercel/node";

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
      const params = new URLSearchParams({
        eventTypeId: String(Number(CALCOM_EVENT_TYPE_ID)),
        start: date,
        end: date,
      });

      const response = await fetchWithTimeout(`${CALCOM_API_URL}/slots?${params.toString()}`, {
        method: "GET",
        headers: calcomHeaders,
      });

      // fetch does not throw on non-2xx — check explicitly. Log status server-side,
      // return the SAME generic message (never leak Cal.com's body).
      if (!response.ok) {
        const detail = await response.text().catch(() => undefined);
        console.error("Error fetching availability: upstream status", response.status, detail);
        return safeJson(res, 500, { success: false, error: "Failed to fetch availability" });
      }

      // Parse JSON defensively — a non-JSON 2xx body must not throw; treat as empty
      // (matches the prior axios behavior: empty slots, still a 200).
      let payload: any = {};
      try {
        payload = await response.json();
      } catch {
        payload = {};
      }

      // Cal.com shape: { data: { "YYYY-MM-DD": [ { start: "2026-06-23T01:00:00.000Z" }, ... ] } }
      const dataObj: Record<string, Array<{ start?: string; time?: string }>> =
        payload?.data || {};

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
      // to 60s — fine, the book endpoint handles the slot-taken case. Set on the
      // success (200) path only — errors are never cached.
      //
      // NOTE: Vercel STRIPS `s-maxage`/`stale-while-revalidate` from the browser-
      // facing `Cache-Control` (the client sees "public, max-age=0, must-revalidate"),
      // while still caching at the edge. We ALSO set `CDN-Cache-Control` — which
      // Vercel does NOT strip and DOES return to the client — so the directive is
      // explicit, controls the edge cache directly, and is verifiable via curl.
      // Confirm a real edge hit with the `x-vercel-cache` (HIT) and `age` headers.
      const cacheControl = "public, s-maxage=60, stale-while-revalidate=120";
      res.setHeader("Cache-Control", cacheControl);
      res.setHeader("CDN-Cache-Control", cacheControl);
      return safeJson(res, 200, { success: true, slots });
    } catch (error: any) {
      if (error?.name === "AbortError") {
        console.error("Availability request to Cal.com timed out");
        return safeJson(res, 504, { success: false, error: "Service temporarily unavailable" });
      }

      // Network failure or other rejection — log server-side, return generic message.
      console.error("Error fetching availability:", error?.message ?? error);
      return safeJson(res, 500, { success: false, error: "Failed to fetch availability" });
    }
  } catch (fatal: any) {
    // Last-resort guard: anything that slipped past the inner handling.
    console.error("Unhandled availability error:", fatal?.message ?? fatal);
    return safeJson(res, 500, { success: false, error: "Failed to fetch availability" });
  }
}
