import type { Metadata } from "next";
import { TechnologyPageSections } from "@/components/TechnologyPageSections";

export const metadata: Metadata = {
  title: "Technology Platform — Digi Krishi",
  description:
    "Farmer, field, and admin interfaces on a layered architecture—crop planning, monitoring, aggregation, and transparent records.",
};

export default function TechnologyPage() {
  return <TechnologyPageSections />;
}
