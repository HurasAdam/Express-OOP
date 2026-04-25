/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Router } from "express";
import { Container } from "../../../app/initContainer";

/**
 * prefix
 * /tags
 */

export const createTagRoutes = (container: Container) => {
  const router = Router();

  router.get("/");

  return router;
};
