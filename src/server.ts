/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import "dotenv/config";
import express from "express";
import { bootstrap } from "./app/bootstrap";
import { SERVER_PORT } from "./config/env";

const app = express();

bootstrap(app, SERVER_PORT);
