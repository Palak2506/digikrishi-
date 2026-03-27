import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Partnership — Digi Krishi",
  description:
    "Reach Digi Krishi for partnerships with FPOs, banks, buyers, development organizations, and technology partners.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
