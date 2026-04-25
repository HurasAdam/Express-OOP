/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Response } from "express";
import AppError from "../utils/appError";

export const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
  });
};
