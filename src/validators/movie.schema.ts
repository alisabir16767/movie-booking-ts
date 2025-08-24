import { z } from "zod";

export const createMovieSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    description: z.string().optional().default(""),
    durationMins: z.number().int().positive()
  })
});
