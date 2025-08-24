import { z } from "zod";

export const createBookingSchema = z.object({
  body: z.object({
    showId: z.string().min(1),
    name: z.string().min(1),
    email: z.string().email(),
    seats: z.number().int().positive()
  })
});
