import { ProductCategoryService } from "./application/product-category.service";
import { ProductCategoryRepository } from "./infrastructure/mongoose/product-category.repository";
import ProductCategoryModel from "./infrastructure/product-category.model";
import { ProductCategoryController } from "./presentation/product.category.controller";

export function createProductCategoryModule() {
  const repository = new ProductCategoryRepository(ProductCategoryModel);
  const service = new ProductCategoryService(repository);
  const controller = new ProductCategoryController(service);

  return {
    controller,
    repository,
  };
}
