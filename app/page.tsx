import { HeroSection } from "@/components/HeroSection";
import { StakeholderCards } from "@/components/StakeholderCards";
import { impactVisionCopy } from "@/content/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digi Krishi — Digital Infrastructure for Organized Agriculture",
  description:
    "A unified digital platform for farmers, cooperatives, and agribusiness—connecting data, markets, and services across the agricultural value chain.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="our-stakeholders" className="scroll-mt-0">
        <StakeholderCards />
      </div>

      <section
        id="what-we-do"
        className="scroll-mt-0 bg-primary py-20 text-center text-white"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
            {impactVisionCopy}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="rounded-xl bg-white/10 px-8 py-6 text-center">
              <div className="text-3xl font-extrabold text-accent">7 Stages</div>
              <div className="mt-1 text-sm text-white">
                End-to-End Value Chain
              </div>
            </div>
            <div className="rounded-xl bg-white/10 px-8 py-6 text-center">
              <div className="text-3xl font-extrabold text-accent">
                3 Institutions
              </div>
              <div className="mt-1 text-sm text-white">
                SFAC · NABARD · NCDC
              </div>
            </div>
            <div className="rounded-xl bg-white/10 px-8 py-6 text-center">
              <div className="text-3xl font-extrabold text-accent">10,000+</div>
              <div className="mt-1 text-sm text-white">
                FPOs Targeted Nationally
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="for-banks"
        className="scroll-mt-0 border-t border-neutral-border bg-white py-16"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-[#1E6B2E] md:text-2xl">
            For Banks &amp; Financial Institutions
          </h2>
          <p className="mt-3 text-sm text-[#666666]">
            Structured documentation and digital traceability for agricultural
            finance.
          </p>
          <a
            href="/for-banks"
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Learn more
          </a>
        </div>
      </section>

      <section
        id="partner"
        className="scroll-mt-0 border-t border-neutral-border bg-neutral-bg py-16"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-[#1E6B2E] md:text-2xl">
            Partner with Us
          </h2>
          <p className="mt-3 text-sm text-[#666666]">
            Tell us about your organization and how you support farmers and
            value chains.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-accent px-8 py-4 font-semibold text-[#1E6B2E] transition-transform hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
