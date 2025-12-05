import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

const CALENDLY_API_TOKEN = process.env.CALENDLY_API_TOKEN;
const CALENDLY_EVENT_TYPE_URI = process.env.CALENDLY_EVENT_TYPE_URI;
const CALENDLY_API_URL = 'https://api.calendly.com';

let cachedEventTypeUri: string | null = null;

async function getEventTypeUri(): Promise<string | null> {
  if (cachedEventTypeUri) {
    return cachedEventTypeUri;
  }

  if (!CALENDLY_API_TOKEN) {
    return null;
  }

  if (CALENDLY_EVENT_TYPE_URI?.startsWith('https://api.calendly.com/event_types/')) {
    cachedEventTypeUri = CALENDLY_EVENT_TYPE_URI;
    return cachedEventTypeUri;
  }

  try {
    const userResponse = await axios.get(
      `${CALENDLY_API_URL}/users/me`,
      {
        headers: {
          'Authorization': `Bearer ${CALENDLY_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const userUri = userResponse.data.resource.uri;
    
    const eventTypesResponse = await axios.get(
      `${CALENDLY_API_URL}/event_types`,
      {
        params: { user: userUri },
        headers: {
          'Authorization': `Bearer ${CALENDLY_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const eventTypes = eventTypesResponse.data.collection;
    
    if (CALENDLY_EVENT_TYPE_URI && CALENDLY_EVENT_TYPE_URI.includes('calendly.com/')) {
      const slugMatch = CALENDLY_EVENT_TYPE_URI.match(/calendly\.com\/[^/]+\/([^/?]+)/);
      if (slugMatch) {
        const slug = slugMatch[1];
        const matchingEventType = eventTypes.find((et: any) => et.slug === slug);
        if (matchingEventType) {
          cachedEventTypeUri = matchingEventType.uri;
          return cachedEventTypeUri;
        }
      }
    }
    
    if (eventTypes.length > 0) {
      cachedEventTypeUri = eventTypes[0].uri;
      return cachedEventTypeUri;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching event type URI:', error);
    return null;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Calendly API Routes

  // GET AVAILABLE SLOTS FOR A DATE RANGE
  app.get('/api/calendly/availability', async (req, res) => {
    if (!CALENDLY_API_TOKEN) {
      return res.status(500).json({ success: false, error: 'Calendly API token not configured' });
    }

    const eventTypeUri = await getEventTypeUri();
    if (!eventTypeUri) {
      return res.status(500).json({ success: false, error: 'Calendly event type not configured or not found' });
    }

    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ success: false, error: 'Date parameter required' });
    }

    try {
      const startTime = `${date}T00:00:00Z`;
      const endDate = new Date(date as string);
      endDate.setDate(endDate.getDate() + 1);
      const endTime = `${endDate.toISOString().split('T')[0]}T00:00:00Z`;

      const response = await axios.get(
        `${CALENDLY_API_URL}/event_type_available_times`,
        {
          params: {
            event_type: eventTypeUri,
            start_time: startTime,
            end_time: endTime
          },
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const availableTimes = response.data.collection || [];
      const allSlots = availableTimes.map((slot: any) => {
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

      res.json({ success: true, slots: allSlots });
    } catch (error: any) {
      console.error('Error fetching availability:', error.response?.data || error.message);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch availability',
        details: error.response?.data
      });
    }
  });

  // CREATE BOOKING VIA CALENDLY SCHEDULING LINK
  app.post('/api/calendly/book', async (req, res) => {
    if (!CALENDLY_API_TOKEN) {
      return res.status(500).json({ success: false, error: 'Calendly API token not configured' });
    }

    const eventTypeUri = await getEventTypeUri();
    if (!eventTypeUri) {
      return res.status(500).json({ success: false, error: 'Calendly event type not configured or not found' });
    }

    const { selectedSlot, schedulingUrl, name, email, phone, company, service, message } = req.body;

    if (!selectedSlot || !name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: selectedSlot, name, email'
      });
    }

    if (!schedulingUrl) {
      return res.status(400).json({
        success: false,
        error: 'No scheduling URL available. Please select a valid time slot from the calendar.'
      });
    }

    try {
      const bookingUrlWithParams = new URL(schedulingUrl);
      
      const allowedHosts = ['calendly.com', 'www.calendly.com', 'api.calendly.com'];
      if (!allowedHosts.includes(bookingUrlWithParams.hostname)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid scheduling URL. Please select a valid time slot from the calendar.'
        });
      }
      bookingUrlWithParams.searchParams.set('name', name);
      bookingUrlWithParams.searchParams.set('email', email);
      if (phone) bookingUrlWithParams.searchParams.set('a1', phone);
      if (company) bookingUrlWithParams.searchParams.set('a2', company);
      if (service) bookingUrlWithParams.searchParams.set('a3', service);
      if (message) bookingUrlWithParams.searchParams.set('a4', message);

      res.json({ 
        success: true, 
        bookingUrl: bookingUrlWithParams.toString(),
        message: 'Redirecting to complete your booking...' 
      });
    } catch (error: any) {
      console.error('Booking error:', error.message);

      res.status(500).json({
        success: false,
        error: 'Failed to create booking link',
        details: error.message
      });
    }
  });

  // GET UPCOMING BOOKINGS
  app.get('/api/calendly/bookings', async (req, res) => {
    if (!CALENDLY_API_TOKEN) {
      return res.status(500).json({ success: false, error: 'Calendly API token not configured' });
    }

    try {
      const userResponse = await axios.get(
        `${CALENDLY_API_URL}/users/me`,
        {
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const userUri = userResponse.data.resource.uri;

      const response = await axios.get(
        `${CALENDLY_API_URL}/scheduled_events`,
        {
          params: {
            user: userUri,
            status: 'active',
            min_start_time: new Date().toISOString()
          },
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_TOKEN}`,
            'Content-Type': 'application/json'
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
