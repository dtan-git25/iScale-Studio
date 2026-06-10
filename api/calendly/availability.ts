import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
const CALENDLY_EVENT_TYPE_URI = process.env.CALENDLY_EVENT_TYPE_URI;
const CALENDLY_API_URL = "https://api.calendly.com";

const calendlyHeaders = {
  Authorization: `Bearer ${CALENDLY_API_KEY}`,
  "Content-Type": "application/json",
};

// GET AVAILABLE SLOTS FOR A DATE
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!CALENDLY_API_KEY) {
    return res.status(500).json({ success: false, error: "Calendly API key not configured" });
  }

  if (!CALENDLY_EVENT_TYPE_URI) {
    return res.status(500).json({ success: false, error: "Calendly Event Type URI not configured" });
  }

  const date = Array.isArray(req.query.date) ? req.query.date[0] : req.query.date;

  if (!date) {
    return res.status(400).json({ success: false, error: "Date parameter required" });
  }

  try {
    const now = new Date();

    const manilaStartOfDay = new Date(`${date}T00:00:00+08:00`);
    const manilaEndOfDay = new Date(`${date}T23:59:59+08:00`);

    let startTime: string;
    const nowPlus10Min = new Date(now.getTime() + 10 * 60 * 1000);

    if (manilaStartOfDay < nowPlus10Min) {
      startTime = nowPlus10Min.toISOString();
    } else {
      startTime = manilaStartOfDay.toISOString();
    }
    const endTime = manilaEndOfDay.toISOString();

    const response = await axios.get(
      `${CALENDLY_API_URL}/event_type_available_times`,
      {
        headers: calendlyHeaders,
        params: {
          event_type: CALENDLY_EVENT_TYPE_URI,
          start_time: startTime,
          end_time: endTime,
        },
      },
    );

    const availableTimes = response.data.collection || [];
    const slots = availableTimes.map((slot: any) => {
      const slotTime = new Date(slot.start_time);
      return {
        time: slotTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Manila",
        }),
        available: slot.status === "available",
        rawTime: slot.start_time,
        schedulingUrl: slot.scheduling_url,
      };
    });

    res.json({ success: true, slots });
  } catch (error: any) {
    console.error("Error fetching availability:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch availability",
      details: error.response?.data,
    });
  }
}
