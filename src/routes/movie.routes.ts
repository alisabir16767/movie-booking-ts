import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createMovieSchema } from "../validators/movie.schema";
import { asyncHandler } from "../middlewares/error";
import { createMovie, listMovies } from "../controllers/movie.controller";

const router = Router();

router.post("/", validate(createMovieSchema), asyncHandler(createMovie));
router.get("/", asyncHandler(listMovies));

export default router;
