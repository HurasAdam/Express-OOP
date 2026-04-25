/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { z } from "zod";

export const updateTagDto = z.object({
  name: z.string().min(2).max(25).optional(),
});

export type UpdateTagDto = z.infer<typeof updateTagDto>;
