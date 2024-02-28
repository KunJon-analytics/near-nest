import * as z from "zod";

import { minReservationRate } from "@/config/default";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

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
      message: "Description must be at least 10 characters.",
    })
    .max(200, {
      message: "Description must not be longer than 200 characters.",
    }),
  address: z
    .string()
    .min(10, {
      message: "Address must be at least 10 characters.",
    })
    .max(80, {
      message: "Address must not be longer than 80 characters.",
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

export const TypeFormSchema = z.object({
  type: z
    .string()
    .min(2, {
      message: "Type must be at least 2 characters.",
    })
    .max(40, {
      message: "Type must not be longer than 40 characters.",
    }),
  maxOccupancy: z
    .number({ required_error: "Number of Adults is required" })
    .positive({ message: "Number of Adults must be positive" })
    .int({ message: "Number of Adults must be an integer" })
    .or(z.string())
    .pipe(
      z.coerce
        .number({ required_error: "Number of Adults is required" })
        .positive({ message: "Number of Adults must be positive" })
        .int({ message: "Number of Adults must be an integer" })
    ),
  totalBedroom: z
    .number({ required_error: "Number of Bedrooms is required" })
    .positive({ message: "Number of Bedrooms must be positive" })
    .int({ message: "Number of Bedrooms must be an integer" })
    .or(z.string())
    .pipe(
      z.coerce
        .number({ required_error: "Number of Bedrooms is required" })
        .positive({ message: "Number of Bedrooms must be positive" })
        .int({ message: "Number of Bedrooms must be an integer" })
    ),
  totalBathroom: z
    .number({ required_error: "Number of Bathrooms is required" })
    .positive({ message: "Number of Bathrooms must be positive" })
    .int({ message: "Number of Bathrooms must be an integer" })
    .or(z.string())
    .pipe(
      z.coerce
        .number({ required_error: "Number of Bathrooms is required" })
        .positive({ message: "Number of Bathrooms must be positive" })
        .int({ message: "Number of Bathrooms must be an integer" })
    ),
});

export const BeaHostSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(40, {
      message: "Name must not be longer than 40 characters.",
    }),
  aboutMe: z
    .string()
    .min(20, {
      message: "Please tell us more...",
    })
    .max(140, {
      message: "You have exceeded 140 characters.",
    }),

  email: z.string().email("Not a valid email").optional(),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number!").optional(),
  profilePicUrl: z.string().optional(),
});

export type CreatePropertyParams = z.infer<typeof GeneralFormSchema>;

export type UpdatePropertyTypeParams = z.infer<typeof TypeFormSchema>;

export type BeaHostParams = z.infer<typeof BeaHostSchema>;
