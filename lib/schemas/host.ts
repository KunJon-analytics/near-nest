import * as z from "zod";

import { minReservationRate } from "@/config/default";

export const GeneralFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(40, {
      message: "Title must not be longer than 40 characters.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Title must be at least 10 characters.",
    })
    .max(200, {
      message: "Title must not be longer than 200 characters.",
    }),
  address: z
    .string()
    .min(10, {
      message: "Title must be at least 10 characters.",
    })
    .max(80, {
      message: "Title must not be longer than 80 characters.",
    }),
  price: z
    .number({ required_error: "Price is required" })
    .positive({ message: "Price must be positive" })
    .or(z.string())
    .pipe(
      z.coerce
        .number({ required_error: "Price is required" })
        .positive({ message: "Price must be positive" })
        .gte(minReservationRate, {
          message: `Price must not be less than ${minReservationRate}`,
        })
    ),
});

export type CreatePropertyParams = z.infer<typeof GeneralFormSchema> & {
  latitude: string | undefined;
  longitude: string | undefined;
};
