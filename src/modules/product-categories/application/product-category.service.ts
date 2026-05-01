import { IProductCategoryRepository } from "../domain/product-category.repository.interface";
import { CreateProductCategoryDto } from "../dto/create-product-category.dto";

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
}
