import { z } from "zod";

export const createShowSchema = z.object({
  body: z.object({
    movieId: z.string().min(1),
    startTime: z.string().datetime(), 
    totalSeats: z.number().int().positive(),
    availableSeats: z.number().int().nonnegative(),   
    price: z.number().nonnegative()
  })
});

export const listShowsSchema = z.object({
  query: z.object({
    movieId: z.string().optional()
  })
});
