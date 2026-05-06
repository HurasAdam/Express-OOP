/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { z } from "zod";
import { Permissions } from "../constants/permissions";

const permissionValues = Object.values(Permissions);

export const createRoleDto = z.object({
  name: z.string().min(3, "Nazwa roli musi mieć min. 3 znaki").max(50).trim(),

  permissions: z
    .array(z.enum(permissionValues as [string, ...string[]]))
    .min(1, "Rola musi mieć przynajmniej 1 uprawnienie"),

  iconKey: z.string().min(1).optional().default("FaEye"),

  labelColor: z.string().min(1).optional().default("blue"),
});

export type CreateRoleDto = z.infer<typeof createRoleDto>;
