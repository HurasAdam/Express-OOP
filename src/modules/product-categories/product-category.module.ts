/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IProductRepository } from "../products/domain/product.repository.interface";
import { ProductCategoryService } from "./application/product-category.service";
import { IProductCategoryRepository } from "./domain/product-category.repository.interface";
import { ProductCategoryController } from "./presentation/product.category.controller";

interface deps {
  productCategoryRepository: IProductCategoryRepository;
  productRepository: IProductRepository;
}

export function createProductCategoryModule(deps: deps) {
  const service = new ProductCategoryService(
    deps.productCategoryRepository,
    deps.productRepository,
  );
  const controller = new ProductCategoryController(service);

  return {
    controller,
  };
}
