/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import mongoose from "mongoose";
import { MONGO_URI } from "../config/env";

export async function initDatabase(): Promise<void> {
  if (!MONGO_URI) {
    throw new Error(`MongoDB URI is not provided`);
  }
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.log(` 🔴 Error durring database connection`, error);
  }
}
