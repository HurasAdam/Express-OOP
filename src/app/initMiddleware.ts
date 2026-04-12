import express from "express";
import { errorHandler } from "../middleware/errorHandler";

export function initMiddleware(app: express.Express) {
  app.use(errorHandler);
}
