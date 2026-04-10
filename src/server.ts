import "dotenv/config";
import express from "express";
import { bootstrap } from "./app/bootstrap";
import { SERVER_PORT } from "./config/env";

const app = express();

bootstrap(app, SERVER_PORT);
