/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Model } from "mongoose";

export class AuthRepository {
  private model;
  constructor(model: Model<any>) {
    this.model = model;
  }
}
