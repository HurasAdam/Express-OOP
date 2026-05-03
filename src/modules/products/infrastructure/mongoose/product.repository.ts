/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Model } from "mongoose";
import { Product } from "../../domain/product.entity";
import { IProductRepository } from "../../domain/product.repository.interface";
import { CreateProductDto } from "../../dto/create-product.dto";
import { ProductDocument } from "../product.model";

export class ProductRepository implements IProductRepository {
  private model;
  constructor(model: Model<ProductDocument>) {
    this.model = model;
  }

  toDomain(doc: ProductDocument): Product {
    return new Product(doc._id.toString(), doc.name, doc.createdBy.toString());
  }

  create(userId: string, data: CreateProductDto) {
    return this.model.create({
      ...data,
      createdBy: userId,
    });
  }

  async find(): Promise<Product[]> {
    const docs = await this.model.find().populate("createdBy");

    return docs.map((doc) => this.toDomain(doc));
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  deleteOne() {}
}
