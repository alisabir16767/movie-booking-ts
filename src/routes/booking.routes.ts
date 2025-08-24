import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createBookingSchema } from "../validators/booking.schema";
import { asyncHandler } from "../middlewares/error";
import { createBooking } from "../controllers/booking.controller";

const router = Router();

router.post("/", validate(createBookingSchema), asyncHandler(createBooking));

export default router;
