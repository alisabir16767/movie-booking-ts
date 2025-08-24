import { Request, Response } from "express";
import { ShowModel } from "../models/show.model";
import { BookingModel } from "../models/booking.model";
import { HttpError } from "../middlewares/error";

export const createBooking = async (req: Request, res: Response) => {
  const { showId, name, email, seats } = req.body;

  const show = await ShowModel.findOneAndUpdate(
    { _id: showId, availableSeats: { $gte: seats } },
    { $inc: { availableSeats: -seats } },
    { new: true }
  );

  if (!show) throw new HttpError(400, "Not enough seats or show not found");

  const booking = await BookingModel.create({
    show: show._id,
    name,
    email,
    seats
  });

  res.status(201).json({
    message: "Booking confirmed",
    booking,
    remainingSeats: show.availableSeats
  });
};
