import { Express } from "express";
import { routes } from "../routes";

export function initRoutes(app: Express) {
  app.use("/api", routes);
}
