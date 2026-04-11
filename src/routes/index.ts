/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/users/user.route";

export const routes = Router();

/**
 * root route
 */

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: " API is Live",
    status: "ok",
    version: "1.0.0",
    docs: "SOON",
    timestamp: new Date().toISOString(),
  });
});

routes.use("/users", userRoutes);
routes.use("/auth", authRoutes);
