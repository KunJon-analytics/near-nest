"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const LoginNavButton = () => {
  const pathname = usePathname();

  return (
    <Button asChild className="px-3" variant="default" size="sm">
      <Link href={`/dashboard/login?redirect=${pathname}`}>
        Get Started Now!
      </Link>
    </Button>
  );
};

export default LoginNavButton;
