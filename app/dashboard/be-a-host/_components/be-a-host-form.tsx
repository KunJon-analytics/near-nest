"use client";

import React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BeaHostParams, BeaHostSchema } from "@/lib/schemas/host";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { beAHost } from "@/actions/host";

const BeAHostForm = () => {
  const form = useForm<z.infer<typeof BeaHostSchema>>({
    resolver: zodResolver(BeaHostSchema),
    defaultValues: {
      aboutMe: "",
      email: "",
      profilePicUrl: undefined,
      name: "",
      phoneNumber: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: BeaHostParams) => {
    try {
      const response = await beAHost(values);
      if (response.success) {
        toast({ description: "Host successfully created" });
        return router.push(`/dashboard/host`);
      }
      toast({
        description: response.error,
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
      toast({
        description: "Sorry, property could not be added. Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form className="card" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
          <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Start Hosting
          </h2>
          <div className="flex justify-center space-x-2">
            <Button
              onClick={() => router.back()}
              className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 bg-transparent hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:bg-transparent dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowRight className="mr-2 h-4 w-4" />
              )}
              {!isSubmitting && "Submit"}
            </Button>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormLabel className="block">
                      <span>Full Name</span>
                      <Input
                        {...field}
                        disabled={isSubmitting}
                        className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                        placeholder="John Doe"
                      />
                    </FormLabel>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormLabel className="block">
                      <span>Email Address</span>
                      <Input
                        {...field}
                        disabled={isSubmitting}
                        className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormLabel>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormLabel className="block">
                      <span>Phone Number</span>
                      <Input
                        {...field}
                        disabled={isSubmitting}
                        className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                        placeholder="+2348012345678"
                      />
                    </FormLabel>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="aboutMe"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <FormLabel className="block">
                    <span>About Me</span>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormLabel>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default BeAHostForm;
