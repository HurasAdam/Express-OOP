import { Model } from "mongoose";

export class AuthRepository {
  private model;
  constructor(model: Model<any>) {
    this.model = model;
  }

  findUserByEmail(email: string) {
    return this.model.findOne({ email });
  }
  createUser(data: any) {
    return this.model.create(data);
  }
}
