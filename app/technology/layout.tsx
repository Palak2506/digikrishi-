import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Platform — Digi Krishi",
  description:
    "Farmer, field, and admin interfaces on a layered architecture—crop planning, monitoring, aggregation, and transparent records.",
};

export default function TechnologyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
