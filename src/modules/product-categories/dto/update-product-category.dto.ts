/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { z } from "zod";
import { createProductCategoryDto } from "./create-product-category.dto";

export const updateProductCategoryDto = createProductCategoryDto.partial();

export type UpdateProductCategoryDto = z.infer<typeof updateProductCategoryDto>;
