import { Schema, model, InferSchemaType } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    durationMins: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export type Movie = InferSchemaType<typeof movieSchema>;
export const MovieModel = model<Movie>("Movie", movieSchema);
