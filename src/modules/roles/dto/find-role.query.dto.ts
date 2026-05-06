import { z } from "zod";

export const findRolesQueryDto = z.object({
  name: z.preprocess((val) => {
    if (typeof val !== "string") return undefined;
    const trimmed = val.trim();
    return trimmed === "" ? undefined : trimmed;
  }, z.string().min(1).optional()),
});
export type FindRolesQueryDto = z.infer<typeof findRolesQueryDto>;
