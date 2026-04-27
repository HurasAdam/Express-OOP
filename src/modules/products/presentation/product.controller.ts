import { ProductService } from "../application/product.service";

export class ProductController {
  private productService;
  constructor(productService: ProductService) {
    this.productService = productService;
  }
}
