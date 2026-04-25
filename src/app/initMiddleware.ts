/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import express from "express";
import { errorHandler } from "../middleware/errorHandler";

export function initMiddleware(app: express.Express) {
  app.use(errorHandler);
}
