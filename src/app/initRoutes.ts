/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Express } from "express";
import { createApiRouter } from "../routes/api.gateway";
import { Container } from "./initContainer";

export function initRoutes(app: Express, container: Container) {
  app.use("/api", createApiRouter(container));
}
