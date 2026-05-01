import { Model } from "mongoose";
import { IProductCategoryRepository } from "../../domain/product-category.repository.interface";
import { ProductCategoryDocument } from "../product-category.model";

export class ProductCategoryRepository implements IProductCategoryRepository {
  private model;
  constructor(model: Model<ProductCategoryDocument>) {
    this.model = model;
  }

  create(data: any) {
    return this.model.create(data);
  }

  find() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  updateOne(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data);
  }

  deleteOne(id: string) {}
}
