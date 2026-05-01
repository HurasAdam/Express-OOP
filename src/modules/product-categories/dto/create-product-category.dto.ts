/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { z } from "zod";

export const createProductCategoryDto = z.object({
  name: z.string().trim().min(2),
});

export type CreateProductCategoryDto = z.infer<typeof createProductCategoryDto>;
