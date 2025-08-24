// this i create to validate the request body, query and params
// or we can say server side validation
import { ZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      });
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ message: "Validation error", errors: err.flatten() });
      }
      next(err);
    }
  };
