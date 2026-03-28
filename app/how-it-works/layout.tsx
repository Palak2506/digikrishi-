import type { Metadata } from "next";
import { howItWorksHeroSubtext } from "@/content/how-it-works";

export const metadata: Metadata = {
  title: "How It Works — Digi Krishi",
  description: howItWorksHeroSubtext,
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
