/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import AppError from "../utils/appError";
import { handleAppError } from "./handleAppError";
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

  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  return res.status(500).send("Internal Server Error");
};
