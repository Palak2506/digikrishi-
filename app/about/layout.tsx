import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Digi Krishi",
  description:
    "Digi Krishi supports organized farmer groups and agricultural value chains with structured digital records and transparent workflows.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
