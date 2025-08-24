import { Request, Response } from "express";
import { MovieModel } from "../models/movie.model";
import { HttpError } from "../middlewares/error";

export const createMovie = async (req: Request, res: Response) => {
  const { title, description = "", durationMins } = req.body;
  const movie = await MovieModel.create({ title, description, durationMins });
  res.status(201).json(movie);
};

export const listMovies = async (_req: Request, res: Response) => {
  const movies = await MovieModel.find().sort({ createdAt: -1 });
  res.json(movies);
};
