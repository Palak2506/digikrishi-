import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmer App — Digi Krishi",
  description:
    "Digital land records, smart crop advisory, growth tracking, and precision fertilizer guidance for farmers.",
};

export default function FarmerAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
