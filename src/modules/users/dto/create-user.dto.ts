/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { z } from "zod";

export const emailSchema = z.email().min(1).max(255);
export const createUserDto = z.object({
  email: emailSchema,
  name: z.string().min(3).max(255),
  surname: z.string().min(3).max(255),
  password: z.string(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
