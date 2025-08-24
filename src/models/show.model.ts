import { Schema, model, Types, InferSchemaType } from "mongoose";

const showSchema = new Schema(
  {
    movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
    startTime: { type: Date, required: true },
    totalSeats: { type: Number, required: true, min: 1 },
    availableSeats: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

export type Show = InferSchemaType<typeof showSchema>;
export const ShowModel = model<Show>("Show", showSchema);
