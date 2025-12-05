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

  // CREATE BOOKING - Direct API booking without redirect
  app.post('/api/calendly/book', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    if (!CALENDLY_EVENT_TYPE_URI) {
      return res.status(500).json({ success: false, error: 'Calendly Event Type URI not configured' });
    }

    const { startTime, name, email, phone, company, service, message } = req.body;

    if (!startTime || !name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: startTime, name, email'
      });
    }

    try {
      // Build booking payload for POST /invitees endpoint
      const bookingData: any = {
        event_type: CALENDLY_EVENT_TYPE_URI,
        start_time: startTime,
        invitee: {
          name: name,
          email: email,
          timezone: 'Asia/Manila'
        },
        // CRITICAL: Must match event type's configured location
        location: {
          kind: "zoom_conference"
        }
      };

      // Add phone number if provided for SMS reminders (must be E.164 format)
      if (phone) {
        // Format phone to E.164 if it's a Philippine number
        let formattedPhone = phone.replace(/\s+/g, '').replace(/-/g, '');
        if (formattedPhone.startsWith('0')) {
          formattedPhone = '+63' + formattedPhone.substring(1);
        } else if (!formattedPhone.startsWith('+')) {
          formattedPhone = '+63' + formattedPhone;
        }
        bookingData.invitee.text_reminder_number = formattedPhone;
      }

      // Add custom question answer - combine all info into the one configured question
      // The exact question text in Calendly: "Please share anything that will help prepare for our meeting."
      const answerParts = [];
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
          answer: answerParts.join('\n'),
          position: 0
        }];
      }

      console.log('Booking request:', JSON.stringify(bookingData, null, 2));

      const response = await axios.post(
        `${CALENDLY_API_URL}/invitees`,
        bookingData,
        { headers: calendlyHeaders }
      );

      // Extract booking details for confirmation
      const bookingResult = response.data.resource || response.data;
      const eventTime = new Date(startTime);
      
      res.json({ 
        success: true, 
        booking: {
          uri: bookingResult.uri,
          email: email,
          name: name,
          startTime: startTime,
          formattedDate: eventTime.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Manila'
          }),
          formattedTime: eventTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Manila'
          })
        },
        message: 'Booking confirmed! A confirmation email has been sent to your email address.' 
      });
    } catch (error: any) {
      console.error('Booking error:', error.response?.data || error.message);
      
      const errorData = error.response?.data;
      let errorMessage = 'Failed to create booking. Please try again.';
      
      if (errorData?.message) {
        errorMessage = errorData.message;
      } else if (errorData?.title) {
        errorMessage = errorData.title;
      } else if (errorData?.details) {
        errorMessage = Array.isArray(errorData.details) 
          ? errorData.details.map((d: any) => d.message).join(', ')
          : errorData.details;
      }
      
      res.status(error.response?.status || 500).json({
        success: false,
        error: errorMessage,
        details: errorData
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
