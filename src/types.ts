import { z } from "zod";

export const formSchema = z.object({
  pickup: z.string().min(3, "Pickup location is required"),
  delivery: z.string().min(3, "Delivery location is required"),
  date: z.string().refine((val) => new Date(val) > new Date(), {
    message: "Date must be in the future",
  }),
  weight: z.string().regex(/^\d+$/, "Weight must be a number"),
  dimensions: z.string().min(3, "Dimensions are required"),
  cargoType: z.string().min(3, "Select a cargo type"),
  price: z.string().min(3, "Estimated cost of cargo"),
});

export type FormDataType = z.infer<typeof formSchema>;
