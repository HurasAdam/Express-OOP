import { Express } from "express";
import { initDatabase } from "./initDatabase";
import { initHttpServer } from "./initHttpServer";
import { initRoutes } from "./initRoutes";

export async function bootstrap(app: Express, port: string) {
  try {
    await initDatabase();
    console.log("🟢 Database has been connected...");
    initRoutes(app);
    initHttpServer(app, port);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
