import { z } from "zod";

export const signupSchema = z.object({
  npi: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\d{10}$/.test(val),
      "NPI must be a 10-digit number",
    ),

  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),

  country: z.string().min(1, "Country is required"),
  occupation: z.string().min(1, "Occupation is required"),
});

export type SignupFormValues = z.infer<typeof signupSchema>;
