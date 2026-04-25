/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Response } from "express";
import { ZodError } from "zod";

export function handleZodError(res: Response, error: ZodError) {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));

  return res.status(400).json({
    errors,
    message: error.message,
  });
}
