import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
const CALENDLY_EVENT_TYPE_URI = process.env.CALENDLY_EVENT_TYPE_URI;
const CALENDLY_API_URL = 'https://api.calendly.com';

const calendlyHeaders = {
  'Authorization': `Bearer ${CALENDLY_API_KEY}`,
  'Content-Type': 'application/json'
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Calendly API Routes

  // GET AVAILABLE SLOTS FOR A DATE
  app.get('/api/calendly/availability', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    if (!CALENDLY_EVENT_TYPE_URI) {
      return res.status(500).json({ success: false, error: 'Calendly Event Type URI not configured' });
    }

    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ success: false, error: 'Date parameter required' });
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
            end_time: endTime
          }
        }
      );

      const availableTimes = response.data.collection || [];
      const slots = availableTimes.map((slot: any) => {
        const slotTime = new Date(slot.start_time);
        return {
          time: slotTime.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Manila'
          }),
          available: slot.status === 'available',
          rawTime: slot.start_time,
          schedulingUrl: slot.scheduling_url
        };
      });

      res.json({ success: true, slots });
    } catch (error: any) {
      console.error('Error fetching availability:', error.response?.data || error.message);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch availability',
        details: error.response?.data
      });
    }
  });

  // CREATE BOOKING
  app.post('/api/calendly/book', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    const { schedulingUrl, name, email, phone, company, service, message } = req.body;

    if (!schedulingUrl || !name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: schedulingUrl, name, email'
      });
    }

    try {
      const bookingData: any = {
        scheduling_url: schedulingUrl,
        email: email,
        name: name,
        timezone: 'Asia/Manila'
      };

      const questionsAndAnswers = [];
      if (phone) {
        questionsAndAnswers.push({
          question: "Phone Number",
          answer: phone,
          position: 0
        });
      }
      if (company) {
        questionsAndAnswers.push({
          question: "Company Name",
          answer: company,
          position: 1
        });
      }
      if (service) {
        questionsAndAnswers.push({
          question: "Service Interest",
          answer: service,
          position: 2
        });
      }
      if (message) {
        questionsAndAnswers.push({
          question: "Project Details",
          answer: message,
          position: 3
        });
      }
      
      if (questionsAndAnswers.length > 0) {
        bookingData.questions_and_answers = questionsAndAnswers;
      }

      const response = await axios.post(
        `${CALENDLY_API_URL}/event_invitees`,
        bookingData,
        { headers: calendlyHeaders }
      );

      res.json({ 
        success: true, 
        booking: response.data.resource,
        message: 'Booking confirmed! Check your email for calendar invite.' 
      });
    } catch (error: any) {
      console.error('Booking error:', error.response?.data || error.message);
      
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.title ||
                          'Failed to create booking';
      
      res.status(error.response?.status || 500).json({
        success: false,
        error: errorMessage,
        details: error.response?.data
      });
    }
  });

  // GET UPCOMING BOOKINGS (for admin purposes)
  app.get('/api/calendly/bookings', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    try {
      const userResponse = await axios.get(
        `${CALENDLY_API_URL}/users/me`,
        { headers: calendlyHeaders }
      );

      const userUri = userResponse.data.resource.uri;

      const response = await axios.get(
        `${CALENDLY_API_URL}/scheduled_events`,
        {
          headers: calendlyHeaders,
          params: {
            user: userUri,
            status: 'active',
            min_start_time: new Date().toISOString()
          }
        }
      );

      res.json({ success: true, bookings: response.data.collection });
    } catch (error: any) {
      console.error('Error fetching bookings:', error.response?.data || error.message);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch bookings'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
