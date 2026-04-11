import express from "express";

export function initMiddleware(app: express.Express) {
  app.use(express.json());
}
