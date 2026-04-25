/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Express } from "express";
import http from "http";

export function initHttpServer(app: Express, port: string) {
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`🟢 Server is running on port : ${port}`);
  });
}
