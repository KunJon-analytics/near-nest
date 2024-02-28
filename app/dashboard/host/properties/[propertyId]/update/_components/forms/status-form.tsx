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
import { $Enums } from "@prisma/client";
import { StatusFormSchema } from "@/lib/schemas/host";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { updateProperty } from "@/actions/properties";
import { PropertyReturnType } from "@/types";

interface StatusFormProps {
  property: Omit<PropertyReturnType, "host" | "reservations">;
}

const StatusForm = ({ property }: StatusFormProps) => {
  const { status, media } = property;
  const form = useForm<z.infer<typeof StatusFormSchema>>({
    resolver: zodResolver(StatusFormSchema),
    defaultValues: { status },
  });
  const { toast } = useToast();
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: { status: string }) => {
    if (media.length < 3 && values.status === "AVAILABLE") {
      return toast({
        description:
          "You need to have at least 3 property images before listing",
        variant: "destructive",
      });
    }
    try {
      const response = await updateProperty({
        id: property.id,
        status: values.status as $Enums.PropertyStatus,
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
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8 rounded-2xl border border-transparent bg-white px-4 py-0 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                    <SelectValue placeholder="Apartment Status" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {Object.values($Enums.PropertyStatus).map((type) => (
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

export default StatusForm;
