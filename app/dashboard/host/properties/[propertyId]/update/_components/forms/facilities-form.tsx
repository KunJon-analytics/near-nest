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
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Prisma } from "@prisma/client";
import { FacilitiesFormSchema } from "@/lib/schemas/host";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { updateProperty } from "@/actions/properties";
import { PropertyReturnType } from "@/types";

interface FacilitiesFormProps {
  property: Omit<PropertyReturnType, "host" | "reservations">;
}

const FacilitiesForm = ({ property }: FacilitiesFormProps) => {
  const { hasAirCon, hasHeating, hasInternet, hasKitchen, hasPool, hasTv } =
    property;
  const form = useForm<z.infer<typeof FacilitiesFormSchema>>({
    resolver: zodResolver(FacilitiesFormSchema),
    defaultValues: {
      hasAirCon,
      hasHeating,
      hasInternet,
      hasKitchen,
      hasPool,
      hasTv,
    },
  });
  const { toast } = useToast();
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: Prisma.PropertyUpdateInput) => {
    try {
      const response = await updateProperty({
        ...values,
        id: property.id,
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
          name="hasAirCon"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Air Conditioner</FormLabel>
                <FormDescription>
                  Is your Property fitted with an AC?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasHeating"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Heating</FormLabel>
                <FormDescription>
                  Is your Property fitted with a heating unit?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasInternet"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Internet</FormLabel>
                <FormDescription>
                  Is your Property fitted with a free Wi-fi for guests?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasKitchen"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Kitchen</FormLabel>
                <FormDescription>
                  Is there a cooking space in your property?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasPool"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Pool</FormLabel>
                <FormDescription>
                  Is a swimming pool available for guests on your property
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasTv"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>TV</FormLabel>
                <FormDescription>
                  Is your Property fitted with TV?
                </FormDescription>
              </div>
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

export default FacilitiesForm;
