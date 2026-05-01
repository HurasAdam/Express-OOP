import { CREATED } from "../../../constants/http";
import catchErrors from "../../../utils/catchErrors";
import { ProductCategoryService } from "../application/product-category.service";
import { createProductCategoryDto } from "../dto/create-product-category.dto";

export class ProductCategoryController {
  private service;
  constructor(service: ProductCategoryService) {
    this.service = service;
  }

  create = catchErrors(async ({ body }, res) => {
    const payload = createProductCategoryDto.parse(body);
    await this.service.create(payload);

    return res.status(CREATED);
  });

  find = catchErrors(async (req, res) => {
    const response = await this.service.find();

    return res.status(200).json(response);
  });
}
