/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CONFLICT } from "../../../constants/http";
import appAssert from "../../../utils/appAssert";
import { IProductRepository } from "../domain/product.repository.interface";
import { CreateProductDto } from "../dto/create-product.dto";
import { FindProductsQueryDto } from "../dto/find-products-query.dto";

export class ProductService {
  private productRepository;
  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async create(userId: string, data: CreateProductDto) {
    const existing = await this.productRepository.findByName(data.name);
    appAssert(!existing, CONFLICT, "Product with that name already exists");

    return this.productRepository.create(userId, data);
  }

  find(query: FindProductsQueryDto) {
    return this.productRepository.find(query);
  }

  findOne(id: string) {
    return this.productRepository.findOne(id);
  }
}
