import { IProductRepository } from "../domain/product.repository.interface";

export class ProductService {
  private productRepository;
  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }
}
