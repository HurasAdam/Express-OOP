import { Model } from "mongoose";

export interface IUSER {
  id: number;
  name: string;
  surname: string;
}

export class UserRepository {
  private model;
  constructor(model: Model<any>) {
    this.model = model;
  }

  find() {
    return this.model.find({});
  }

  findOneById(id: number) {
    return this.model.findById(id);
  }

  deleteOne() {
    console.log("TODO");
  }
}
