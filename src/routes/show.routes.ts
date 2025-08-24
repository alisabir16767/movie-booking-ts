import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createShowSchema, listShowsSchema } from "../validators/show.schema";
import { asyncHandler } from "../middlewares/error";
import { createShow, listShows, getShow } from "../controllers/show.controller";

const router = Router();

router.post("/", validate(createShowSchema), asyncHandler(createShow));
router.get("/", validate(listShowsSchema), asyncHandler(listShows));
router.get("/:id", asyncHandler(getShow));

export default router;
