import { z } from "zod";

// Validation schema for the public booking form body (POST /api/calendly/book).
// Length caps prevent oversized payloads being forwarded to Calendly / logged.
export const bookingSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(20).optional(),
  company: z.string().max(150).optional(),
  service: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  // Must be a parseable ISO date string (Calendly slot start_time).
  startTime: z
    .string()
    .refine((s) => !Number.isNaN(Date.parse(s)), {
      message: "startTime must be a valid ISO date",
    }),
  // Honeypot: real users never fill this; bots that auto-fill every field will.
  company_url: z.string().max(200).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
