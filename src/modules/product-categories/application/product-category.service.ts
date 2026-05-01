/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IProductCategoryRepository } from "../domain/product-category.repository.interface";
import { CreateProductCategoryDto } from "../dto/create-product-category.dto";
import { UpdateProductCategoryDto } from "../dto/update-product-category.dto";

export class ProductCategoryService {
  private productCategoryRepository;
  constructor(productCategoryRepository: IProductCategoryRepository) {
    this.productCategoryRepository = productCategoryRepository;
  }

  create(data: CreateProductCategoryDto) {
    return this.productCategoryRepository.create(data);
  }
  find() {
    return this.productCategoryRepository.find();
  }

  findOne(id: string) {
    return this.productCategoryRepository.findOne(id);
  }

  updateOne(id: string, data: UpdateProductCategoryDto) {
    return this.productCategoryRepository.updateOne(id, data);
  }

  deleteOne(id: string) {
    return this.productCategoryRepository.deleteOne(id);
  }
}
