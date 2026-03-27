import type { Metadata } from "next";
import { HowItWorksTimeline } from "@/components/HowItWorksTimeline";
import { howItWorksHeroSubtext } from "@/content/how-it-works";

export const metadata: Metadata = {
  title: "How It Works — Digi Krishi",
  description: howItWorksHeroSubtext,
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-[#1E6B2E] py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold tracking-widest text-white/90">
            THE PROCESS
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            How Digi Krishi Works
          </h1>
          <p className="mt-4 text-white/80">{howItWorksHeroSubtext}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <HowItWorksTimeline />
      </section>
    </>
  );
}
