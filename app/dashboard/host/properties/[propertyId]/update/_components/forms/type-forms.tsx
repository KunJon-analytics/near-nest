"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2, Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { $Enums } from "@prisma/client";
import { TypeFormSchema, UpdatePropertyTypeParams } from "@/lib/schemas/host";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { updateProperty } from "@/actions/properties";
import { PropertyReturnType } from "@/types";

interface TypeFormProps {
  property: Omit<PropertyReturnType, "host" | "reservations">;
}

const TypeForm = ({ property }: TypeFormProps) => {
  const { maxOccupancy, totalBathroom, totalBedroom, type } = property;
  const form = useForm<z.infer<typeof TypeFormSchema>>({
    resolver: zodResolver(TypeFormSchema),
    defaultValues: { maxOccupancy, totalBathroom, totalBedroom, type },
  });
  const { toast } = useToast();
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: UpdatePropertyTypeParams) => {
    try {
      const response = await updateProperty({
        ...values,
        id: property.id,
        type: values.type as $Enums.PropertyType,
      });
      if (response.success) {
        toast({
          description: `Property with ID: ${response.success} updated successfully`,
        });
      }
      if (response.error) {
        toast({
          description: response.error,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "Sorry, property could not be updated. Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4 p-4 sm:p-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8 rounded-2xl border border-transparent bg-white px-4 py-0 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                    <SelectValue placeholder="Apartment Type" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {Object.values($Enums.PropertyType).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxOccupancy"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormControl>
                <FormLabel className="block">
                  <span>Number of Adults</span>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                    value={field.value || ""} // avoid errors of uncontrolled vs controlled
                    pattern="[0-9]*" // to receive only numbers without showing does weird arrows in the input
                    onChange={
                      (e) =>
                        e.target.validity.valid &&
                        field.onChange(e.target.value) // e.target.validity.valid is required for pattern to work
                    }
                    placeholder="1"
                    type="number"
                    step={"1"}
                    inputMode="numeric" // display numeric keyboard on mobile
                  />
                </FormLabel>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="totalBathroom"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormControl>
                <FormLabel className="block">
                  <span>Number of Bathrooms</span>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                    value={field.value || ""} // avoid errors of uncontrolled vs controlled
                    pattern="[0-9]*" // to receive only numbers without showing does weird arrows in the input
                    onChange={
                      (e) =>
                        e.target.validity.valid &&
                        field.onChange(e.target.value) // e.target.validity.valid is required for pattern to work
                    }
                    placeholder="1"
                    type="number"
                    step={"1"}
                    inputMode="numeric" // display numeric keyboard on mobile
                  />
                </FormLabel>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="totalBedroom"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormControl>
                <FormLabel className="block">
                  <span>Number of Bedrooms</span>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                    value={field.value || ""} // avoid errors of uncontrolled vs controlled
                    pattern="[0-9]*" // to receive only numbers without showing does weird arrows in the input
                    onChange={
                      (e) =>
                        e.target.validity.valid &&
                        field.onChange(e.target.value) // e.target.validity.valid is required for pattern to work
                    }
                    placeholder="1"
                    type="number"
                    step={"1"}
                    inputMode="numeric" // display numeric keyboard on mobile
                  />
                </FormLabel>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center space-x-2 pt-4">
          <Button
            type="button"
            onClick={() => router.back()}
            className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            disabled={!isValid || isSubmitting}
            type="submit"
            className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Pencil className="mr-2 h-4 w-4" />
            )}
            {!isSubmitting && "Update"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TypeForm;
