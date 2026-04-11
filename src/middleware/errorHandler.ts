import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { handleZodError } from "./handleZodError";

export const errorHandler: ErrorRequestHandler = async (
  error: Error,
  req,
  res,
  next,
) => {
  console.log("---------");
  console.log("Error:", error.stack);

  if (error instanceof ZodError) {
    return handleZodError(res, error);
  }

  return res.status(500).send("Internal Server Error");
};
