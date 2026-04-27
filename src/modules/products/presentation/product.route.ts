import { Router } from "express";
import { Container } from "../../../app/initContainer";

/**
 * prefix
 * /products
 */

export const createProductRoutes = (container: Container) => {
  const router = Router();

  router.post("/");
  router.get("/");

  return router;
};
