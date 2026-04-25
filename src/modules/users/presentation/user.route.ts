/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Router } from "express";
import { Container } from "../../../app/initContainer";

/**
 * prefix
 * /users
 */

export const createUserRoutes = (container: Container) => {
  const router = Router();
  router.get("/", container.user.controller.find);
  router.get("/:userId", container.user.controller.findOne);
  router.post("/create", container.user.controller.create);

  return router;
};
