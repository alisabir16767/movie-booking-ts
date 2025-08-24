import { Schema, model, InferSchemaType } from "mongoose";

const bookingSchema = new Schema(
  {
    show: { type: Schema.Types.ObjectId, ref: "Show", required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    seats: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export type Booking = InferSchemaType<typeof bookingSchema>;
export const BookingModel = model<Booking>("Booking", bookingSchema);
