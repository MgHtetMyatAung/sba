import { z } from "zod";

const contractTypes = ["MONTHLY", "YEARLY"] as const;

export const hostelformSchema = z.object({
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  location: z.string().min(1, "Location is required"),
  region: z.string().min(1, "Region is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  pricePerMonth: z
    .string()
    .refine((val) => Number(val) > 0, "Price must be positive"),
  agent_fee: z
    .string()
    .refine((val) => !val || Number(val) >= 0, "Agent fee must be non-negative")
    .optional(),
  deposit: z
    .string()
    .refine((val) => !val || Number(val) >= 0, "Deposit must be non-negative")
    .optional(),
  contract: z.enum(contractTypes),
  contractPeriod: z
    .number()
    .int()
    .positive("Contract period must be a positive integer"),
});
