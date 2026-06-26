"use client";

import { ReactNode } from "react";
import { useQuote } from "@/components/QuoteContext";
import { buttonBase, buttonVariants, type ButtonVariant } from "@/components/ui";

/* Drop-in for <Button href="/contact#form">…</Button>. Renders the same
   primary/ghost/dark styling but opens the side-quote panel on click instead
   of navigating. Safe to use from server components (this file is client). */
export function QuoteButton({
  variant = "primary",
  className = "",
  children,
}: {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useQuote();
  return (
    <button
      type="button"
      onClick={open}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
