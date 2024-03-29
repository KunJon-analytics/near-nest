"use client";

import Link from "next/link";
import * as React from "react";

import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import SignInForm from "./sign-in-form";

interface SignInModalProps {
  size?: "default" | "sm" | "lg" | "icon" | null;
}

export function SignInModal({ size = "sm" }: SignInModalProps) {
  const [open, setOpen] = React.useState(false);
  const { isDesktop } = useMediaQuery();

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="px-3" variant="default" size={size}>
            Get Started Now!
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="flex flex-col items-center gap-y-4">
            <Link href={siteConfig.url}>
              <Icons.logo className="h-10 w-10" />
            </Link>
            <DialogTitle> Sign In</DialogTitle>
            <DialogDescription className="text-center">
              Unlock the door to seamless rentals! Sign in with your Pi Network
              wallet and dive into a world of effortless transactions.
              Let&apos;s get you started!
            </DialogDescription>
          </DialogHeader>
          <SignInForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="px-3" variant="default" size={size}>
          Get Started Now!
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left flex flex-col items-center gap-y-4">
          <Link href={siteConfig.url}>
            <Icons.logo className="h-10 w-10" />
          </Link>
          <DrawerTitle> Sign In</DrawerTitle>
          <DrawerDescription className="text-center">
            Unlock the door to seamless rentals! Sign in with your Pi Network
            wallet and dive into a world of effortless transactions. Let&apos;s
            get you started!
          </DrawerDescription>
        </DrawerHeader>
        <SignInForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
