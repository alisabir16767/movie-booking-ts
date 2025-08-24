import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movie.routes";
import showRoutes from "./routes/show.routes";
import bookingRoutes from "./routes/booking.routes";
import { errorHandler } from "./middlewares/error";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.json({ message: "Welcome to the Movie Booking API" }));

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/movies", movieRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(errorHandler);

export default app;
