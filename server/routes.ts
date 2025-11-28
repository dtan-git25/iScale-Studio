import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

const CAL_API_KEY = process.env.CALCOM_API_KEY;
const CAL_EVENT_TYPE_ID = process.env.CALCOM_EVENT_TYPE_ID;
const CAL_API_URL = 'https://api.cal.com/v1';

export async function registerRoutes(app: Express): Promise<Server> {
  // Cal.com API Routes

  // GET AVAILABLE SLOTS FOR A DATE
  app.get('/api/cal/availability', async (req, res) => {
    if (!CAL_API_KEY) {
      return res.status(500).json({ error: 'Cal.com API key not configured' });
    }

    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Date parameter required' });
    }

    try {
      const startTime = `${date}T00:00:00Z`;
      const endTime = `${date}T23:59:59Z`;

      const response = await axios.get(
        `${CAL_API_URL}/slots`,
        {
          params: {
            eventTypeId: CAL_EVENT_TYPE_ID,
            startTime: startTime,
            endTime: endTime
          },
          headers: {
            'Authorization': `Bearer ${CAL_API_KEY}`
          }
        }
      );

      const slots = response.data.slots?.map((slot: any) => {
        const slotTime = new Date(slot.time);
        return {
          time: slotTime.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          }),
          available: true,
          rawTime: slot.time
        };
      }) || [];

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
  app.post('/api/cal/book', async (req, res) => {
    if (!CAL_API_KEY) {
      return res.status(500).json({ success: false, error: 'Cal.com API key not configured' });
    }

    if (!CAL_EVENT_TYPE_ID) {
      return res.status(500).json({ success: false, error: 'Cal.com event type not configured' });
    }

    const { selectedSlot, name, email, phone, company, service, message } = req.body;

    if (!selectedSlot || !name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: selectedSlot, name, email'
      });
    }

    try {
      const bookingData = {
        eventTypeId: parseInt(CAL_EVENT_TYPE_ID || '0'),
        start: selectedSlot,
        responses: {
          name: name,
          email: email,
          guests: [],
          location: { optionValue: '', value: 'integrations:zoom' }
        },
        metadata: {
          phone: phone || '',
          company: company || '',
          service: service || 'AI Web & App Development',
          notes: message || ''
        },
        timeZone: 'Asia/Manila',
        language: 'en'
      };

      const response = await axios.post(
        `${CAL_API_URL}/bookings`,
        bookingData,
        {
          headers: {
            'Authorization': `Bearer ${CAL_API_KEY}`,
            'Content-Type': 'application/json',
            'cal-api-version': '2024-08-13'
          }
        }
      );

      res.json({ 
        success: true, 
        booking: response.data,
        message: 'Booking confirmed! Check your email for calendar invite and Zoom link.' 
      });
    } catch (error: any) {
      console.error('Booking error:', error.response?.data || error.message);
      res.status(500).json({
        success: false,
        error: 'Failed to create booking',
        details: error.response?.data
      });
    }
  });

  // GET UPCOMING BOOKINGS
  app.get('/api/cal/bookings', async (req, res) => {
    if (!CAL_API_KEY) {
      return res.status(500).json({ error: 'Cal.com API key not configured' });
    }

    try {
      const response = await axios.get(
        `${CAL_API_URL}/bookings`,
        {
          headers: {
            'Authorization': `Bearer ${CAL_API_KEY}`
          }
        }
      );

      res.json({ success: true, bookings: response.data });
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
