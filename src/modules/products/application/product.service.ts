/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CONFLICT } from "../../../constants/http";
import appAssert from "../../../utils/appAssert";
import { IProductCategoryRepository } from "../../product-categories/domain/product-category.repository.interface";
import { IProductRepository } from "../domain/product.repository.interface";
import { CreateProductDto } from "../dto/create-product.dto";
import { FindProductsQueryDto } from "../dto/find-products-query.dto";

export class ProductService {
  private productRepository;
  private productCategoryRepository;
  constructor(
    productRepository: IProductRepository,
    productCategoryRepository: IProductCategoryRepository,
  ) {
    this.productRepository = productRepository;
    this.productCategoryRepository = productCategoryRepository;
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

  async findOneWithDetails(id: string) {
    const product = await this.productRepository.findOne(id);

    const categories = await this.productCategoryRepository.findByProductId(id);

    return {
      product,
      categories,
    };
  }
}
