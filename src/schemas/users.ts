import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Address is required"),
  company: z.string().min(1, "Address is required"),
});
