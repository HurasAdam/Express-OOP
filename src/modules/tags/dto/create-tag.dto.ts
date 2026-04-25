/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { z } from "zod";

export const createTagDto = z.object({
  name: z.string().min(2).max(25),
});

export type CreateTagDto = z.infer<typeof createTagDto>;
