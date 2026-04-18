import cookieParser from "cookie-parser";
import express, { Express } from "express";
import { initDatabase } from "./initDatabase";
import { initHttpServer } from "./initHttpServer";
import { initMiddleware } from "./initMiddleware";
import { initRoutes } from "./initRoutes";
export async function bootstrap(app: Express, port: string) {
  try {
    await initDatabase();
    console.log("🟢 Database has been connected");

    app.use(express.json());
    app.use(cookieParser());

    initRoutes(app);

    initMiddleware(app);

    initHttpServer(app, port);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
