import { z } from "zod";

import { emailSchema } from "../../users/dto/create-user.dto";

export const passwordSchema = z.string().min(6).max(255);

export const loginUserDto = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginUserDto = z.infer<typeof loginUserDto>;
