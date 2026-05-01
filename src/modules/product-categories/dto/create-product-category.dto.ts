import { z } from "zod";

export const createProductCategoryDto = z.object({
  name: z.string().trim().min(2),
});

export type CreateProductCategoryDto = z.infer<typeof createProductCategoryDto>;
