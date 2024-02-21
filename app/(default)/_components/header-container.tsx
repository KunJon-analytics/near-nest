"use client";

import React from "react";

import useScroll from "@/hooks/use-scroll";

interface HeaderContainerProps {
  children?: React.ReactNode;
  scroll?: boolean;
}

const HeaderContainer = ({ children, scroll }: HeaderContainerProps) => {
  const scrolled = useScroll(50);
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      {children}
    </header>
  );
};

export default HeaderContainer;
