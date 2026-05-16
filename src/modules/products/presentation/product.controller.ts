/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { NO_CONTENT, OK } from "../../../constants/http";
import catchErrors from "../../../utils/catchErrors";
import { ProductService } from "../application/product.service";
import { createProductDto } from "../dto/create-product.dto";
import { findProductsQueryDto } from "../dto/find-products-query.dto";

export class ProductController {
  private productService;
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  create = catchErrors(async ({ userId, body }, res) => {
    const payload = createProductDto.parse(body);
    await this.productService.create(userId, payload);
    return res.sendStatus(NO_CONTENT);
  });

  find = catchErrors(async (req, res) => {
    const query = findProductsQueryDto.parse(req.query);

    const products = await this.productService.find(query);
    return res.status(OK).json(products);
  });
  findOneWithDetails = catchErrors(async ({ params }, res) => {
    const { id } = params;
    const product = await this.productService.findOneWithDetails(id);
    return res.status(OK).json(product);
  });
}
