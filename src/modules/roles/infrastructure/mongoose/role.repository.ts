import { Model } from "mongoose";
import { RoleDocument } from "./role.model";

export class Role {
  private model;
  constructor(model: Model<RoleDocument>) {
    this.model = model;
  }
}
