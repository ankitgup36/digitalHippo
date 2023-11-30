import { z } from "zod";

export const SignupValidator = z.object({
  email: z.string().email({ message: "please provide correct email." }),
  password: z
    .string()
    .min(8, { message: "password must be 8 characters long." }),
});

export const SigninValidator = z.object({
  email: z.string().email({ message: "please provide correct email." }),
  password: z
    .string()
    .min(8, { message: "password must be 8 characters long." }),
});
