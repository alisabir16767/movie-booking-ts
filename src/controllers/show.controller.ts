import { Request, Response } from "express";
import { ShowModel } from "../models/show.model";
import { MovieModel } from "../models/movie.model";
import { HttpError } from "../middlewares/error";

export const createShow = async (req: Request, res: Response) => {
  const { movieId, startTime, totalSeats, price } = req.body;

  const movie = await MovieModel.findById(movieId);
  if (!movie) throw new HttpError(404, "Movie not found");

  const show = await ShowModel.create({
    movie: movie._id,
    startTime: new Date(startTime),
    totalSeats,
    availableSeats: totalSeats,
    price
  });

  res.status(201).json(show);
};

export const listShows = async (req: Request, res: Response) => {
  const { movieId } = req.query as { movieId?: string };
  const query: any = {};
  if (movieId) query.movie = movieId;

  const shows = await ShowModel.find(query)
    .populate("movie", "title durationMins")
    .sort({ startTime: 1 });

  res.json(shows);
};

export const getShow = async (req: Request, res: Response) => {
  const show = await ShowModel.findById(req.params.id).populate("movie", "title durationMins");
  if (!show) throw new HttpError(404, "Show not found");
  res.json(show);
};
