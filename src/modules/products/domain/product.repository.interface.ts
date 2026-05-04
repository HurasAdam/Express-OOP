/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "./product.entity";

export interface IProductRepository {
  create(userId: string, data: CreateProductDto): Promise<any>;
  find(): Promise<any>;
  findOne(id: string): Promise<any>;
  findByName(name: string): Promise<Product | null>;
  deleteOne(): any;
}
