/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { DB_TYPE } from "../config/env";
import { createMongoRepositoryProvider } from "../providers/mongo/mongoRepository.provider";

export function initRepositories() {
  switch (DB_TYPE) {
    case "MONGO":
      return createMongoRepositoryProvider();

    default:
      throw new Error("Unsupported DB");
  }
}
