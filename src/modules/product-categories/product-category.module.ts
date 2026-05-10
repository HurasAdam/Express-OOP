/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IProductRepository } from "../products/domain/product.repository.interface";
import { ProductCategoryService } from "./application/product-category.service";
import { ProductCategoryRepository } from "./infrastructure/mongoose/product-category.repository";
import ProductCategoryModel from "./infrastructure/product-category.model";
import { ProductCategoryController } from "./presentation/product.category.controller";

interface deps {
  productRepository: IProductRepository;
}

export function createProductCategoryModule(deps: deps) {
  const repository = new ProductCategoryRepository(ProductCategoryModel);
  const service = new ProductCategoryService(
    repository,
    deps.productRepository,
  );
  const controller = new ProductCategoryController(service);

  return {
    controller,
    repository,
  };
}
