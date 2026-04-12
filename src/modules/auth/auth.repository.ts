import { Model } from "mongoose";

export class AuthRepository {
  private model;
  constructor(model: Model<any>) {
    this.model = model;
  }
}
