/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IProductCategoryRepository } from "../product-categories/domain/product-category.repository.interface";
import { ProductService } from "./application/product.service";
import { IProductRepository } from "./domain/product.repository.interface";

import { ProductController } from "./presentation/product.controller";

interface deps {
  productRepository: IProductRepository;
  productCategoryRepository: IProductCategoryRepository;
}

export function createProductModule(deps: deps) {
  const service = new ProductService(
    deps.productRepository,
    deps.productCategoryRepository,
  );
  const controller = new ProductController(service);

  return {
    repository: deps.productRepository,
    controller,
  };
}
