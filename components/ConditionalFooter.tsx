"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  if (
    pathname === "/contact" ||
    pathname === "/how-it-works" ||
    pathname === "/farmer-app"
  )
    return null;

  return <Footer />;
}

