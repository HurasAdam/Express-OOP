/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Router } from "express";
import { Container } from "../../../app/initContainer";

/**
 * prefix
 * /auth
 */

export const createAuthRoutes = (container: Container) => {
  const router = Router();
  router.get(
    "/me",
    container.authGuard.authenticate,
    container.auth.controller.findMe,
  );
  router.post("/login", container.auth.controller.login);
  router.get(
    "/logout",
    container.authGuard.authenticate,
    container.auth.controller.logout,
  );
  router.get("/refresh", container.auth.controller.refresh);

  return router;
};
