"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingPartnerButton() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#F4A322] px-5 py-3 font-semibold text-[#1E6B2E] shadow-lg transition-transform hover:scale-105"
    >
      Partner with Us
    </Link>
  );
}

