/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Router } from "express";
import { Container } from "../../../app/initContainer";

/**
 * prefix
 * /sessions
 */

export const createSessionRoutes = (container: Container) => {
  const router = Router();
  router.get(
    "/",
    container.authGuard.authenticate,
    container.session.controller.find,
  );
  router.delete(
    "/:sessionId",
    container.authGuard.authenticate,
    container.session.controller.deleteOne,
  );

  return router;
};
