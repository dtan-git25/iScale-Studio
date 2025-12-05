import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
const CALENDLY_EVENT_TYPE_URI = process.env.CALENDLY_EVENT_TYPE_URI;
const CALENDLY_API_URL = 'https://api.calendly.com';

// Cache for the resolved event type URI
let resolvedEventTypeUri: string | null = null;

// Helper function to resolve the event type URI from a booking link or slug
async function getEventTypeUri(): Promise<string | null> {
  if (resolvedEventTypeUri) {
    return resolvedEventTypeUri;
  }

  if (!CALENDLY_API_KEY || !CALENDLY_EVENT_TYPE_URI) {
    console.error('Missing Calendly credentials');
    return null;
  }

  // If it's already an API URI, use it directly
  if (CALENDLY_EVENT_TYPE_URI.includes('api.calendly.com/event_types/')) {
    resolvedEventTypeUri = CALENDLY_EVENT_TYPE_URI;
    return resolvedEventTypeUri;
  }

  try {
    console.log('Resolving event type from:', CALENDLY_EVENT_TYPE_URI);
    console.log('API Key length:', CALENDLY_API_KEY.length, 'starts with:', CALENDLY_API_KEY.substring(0, 10) + '...');
    
    // First, get the current user
    const userResponse = await axios.get(`${CALENDLY_API_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${CALENDLY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('User response:', userResponse.data);
    const userUri = userResponse.data.resource.uri;

    // Then get their event types
    const eventTypesResponse = await axios.get(`${CALENDLY_API_URL}/event_types`, {
      params: {
        user: userUri,
        active: true
      },
      headers: {
        'Authorization': `Bearer ${CALENDLY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const eventTypes = eventTypesResponse.data.collection || [];
    console.log('Found event types:', eventTypes.length, eventTypes.map((et: any) => ({ slug: et.slug, name: et.name })));
    
    // Try to match by slug from the booking URL (e.g., "30min" from calendly.com/user/30min)
    const urlParts = CALENDLY_EVENT_TYPE_URI.split('/');
    const slug = urlParts[urlParts.length - 1];
    console.log('Looking for slug:', slug);
    
    // Find matching event type by slug
    const matchingEventType = eventTypes.find((et: any) => 
      et.slug === slug || et.scheduling_url?.includes(slug)
    );

    if (matchingEventType) {
      resolvedEventTypeUri = matchingEventType.uri;
      console.log('Resolved event type URI:', resolvedEventTypeUri);
      return resolvedEventTypeUri;
    }

    // If no match found, use the first active event type
    if (eventTypes.length > 0) {
      resolvedEventTypeUri = eventTypes[0].uri;
      console.log('Using first available event type:', resolvedEventTypeUri);
      return resolvedEventTypeUri;
    }

    console.error('No event types found for user');
    return null;
  } catch (error: any) {
    console.error('Error resolving event type URI:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });
    return null;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Calendly API Routes

  // GET AVAILABLE SLOTS FOR A DATE RANGE
  app.get('/api/calendly/availability', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    if (!CALENDLY_EVENT_TYPE_URI) {
      return res.status(500).json({ success: false, error: 'Calendly event type not configured' });
    }

    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ success: false, error: 'Date parameter required' });
    }

    try {
      // Get resolved event type URI
      const eventTypeUri = await getEventTypeUri();
      if (!eventTypeUri) {
        return res.status(500).json({ success: false, error: 'Could not resolve Calendly event type' });
      }

      // Calendly requires start_time to be in the future
      const queryDate = new Date(date as string);
      const now = new Date();
      
      // If querying for today, start from now; otherwise start from beginning of day
      let startTime: string;
      if (queryDate.toDateString() === now.toDateString()) {
        // For today, start from current time (rounded up to next hour)
        const nextHour = new Date(now);
        nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
        startTime = nextHour.toISOString();
      } else {
        startTime = `${date}T00:00:00Z`;
      }
      
      const endDate = new Date(date as string);
      endDate.setDate(endDate.getDate() + 1);
      const endTime = `${endDate.toISOString().split('T')[0]}T00:00:00Z`;

      console.log('Fetching Calendly availability:', { eventTypeUri, startTime, endTime });

      const response = await axios.get(
        `${CALENDLY_API_URL}/event_type_available_times`,
        {
          params: {
            event_type: eventTypeUri,
            start_time: startTime,
            end_time: endTime
          },
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_KEY}`,
            'Content-Type': 'application/json'
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
      console.error('Error fetching Calendly availability:', error.response?.data || error.message);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch availability',
        details: error.response?.data
      });
    }
  });

  // CREATE BOOKING VIA CALENDLY
  app.post('/api/calendly/book', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    if (!CALENDLY_EVENT_TYPE_URI) {
      return res.status(500).json({ success: false, error: 'Calendly event type not configured' });
    }

    const { selectedSlot, name, email, phone, company, service, message } = req.body;

    if (!selectedSlot || !name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: selectedSlot, name, email'
      });
    }

    try {
      // Get resolved event type URI
      const eventTypeUri = await getEventTypeUri();
      if (!eventTypeUri) {
        return res.status(500).json({ success: false, error: 'Could not resolve Calendly event type' });
      }

      const bookingData = {
        event_type: eventTypeUri,
        start_time: selectedSlot,
        invitee: {
          name: name,
          email: email,
          timezone: 'Asia/Manila',
          text_reminder_number: phone || undefined
        },
        questions_and_answers: [
          {
            question: 'Company',
            answer: company || 'Not provided',
            position: 0
          },
          {
            question: 'Service Interest',
            answer: service || 'AI Web & App Development',
            position: 1
          },
          {
            question: 'Project Details',
            answer: message || 'No additional details provided',
            position: 2
          }
        ]
      };

      console.log('Creating Calendly booking:', { eventTypeUri, startTime: selectedSlot, inviteeEmail: email });

      const response = await axios.post(
        `${CALENDLY_API_URL}/invitees`,
        bookingData,
        {
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      res.json({ 
        success: true, 
        booking: response.data.resource,
        message: 'Booking confirmed! Check your email for calendar invite and meeting details.' 
      });
    } catch (error: any) {
      console.error('Calendly booking error:', error.response?.data || error.message);
      
      // Handle specific Calendly API errors
      if (error.response?.status === 403) {
        return res.status(403).json({
          success: false,
          error: 'Calendly Scheduling API requires a paid plan. Please upgrade your Calendly account.',
          details: error.response?.data
        });
      }
      
      if (error.response?.status === 400) {
        return res.status(400).json({
          success: false,
          error: 'Invalid booking request. The selected time may no longer be available.',
          details: error.response?.data
        });
      }

      res.status(500).json({
        success: false,
        error: 'Failed to create booking',
        details: error.response?.data
      });
    }
  });

  // GET SCHEDULED EVENTS (for admin purposes)
  app.get('/api/calendly/events', async (req, res) => {
    if (!CALENDLY_API_KEY) {
      return res.status(500).json({ success: false, error: 'Calendly API key not configured' });
    }

    try {
      // First get the current user to get their URI
      const userResponse = await axios.get(
        `${CALENDLY_API_URL}/users/me`,
        {
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const userUri = userResponse.data.resource.uri;

      // Then get scheduled events
      const eventsResponse = await axios.get(
        `${CALENDLY_API_URL}/scheduled_events`,
        {
          params: {
            user: userUri,
            status: 'active',
            min_start_time: new Date().toISOString()
          },
          headers: {
            'Authorization': `Bearer ${CALENDLY_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      res.json({ success: true, events: eventsResponse.data.collection });
    } catch (error: any) {
      console.error('Error fetching Calendly events:', error.response?.data || error.message);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch events'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
