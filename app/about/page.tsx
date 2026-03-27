import type { Metadata } from "next";
import { impactVisionCopy } from "@/content/home";

export const metadata: Metadata = {
  title: "About — Digi Krishi",
  description:
    "Digi Krishi supports organized farmer groups and agricultural value chains with structured digital records and transparent workflows.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1E6B2E] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">About Digi Krishi</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-[#1E6B2E] md:text-3xl">
            Overview
          </h2>
          <p className="mt-4 text-[#333333] leading-relaxed">
            Digi Krishi is a digital management platform designed to support
            organized farmer groups and agricultural value chains. The platform
            maintains structured digital records related to farmers, land
            parcels, crop planning, group governance, and produce aggregation.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-[#1E6B2E] md:text-3xl">
            Policy Context
          </h2>
          <p className="mt-4 text-[#333333] leading-relaxed">
            The Government of India&apos;s 10,000 Farmer Producer Organisation
            (FPO) scheme aims to build farmer-owned enterprises that can
            aggregate produce, access markets, and improve incomes. National
            institutions coordinate implementation, capacity building, and
            financing for these producer organizations across states.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["SFAC", "NABARD", "NCDC"].map((n) => (
              <span
                key={n}
                className="rounded-full bg-primary-tint px-4 py-2 text-sm font-semibold text-[#2D8B3F]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-[#1E6B2E] md:text-3xl">
            Our Vision
          </h2>
          <p className="mt-4 text-[#333333] leading-relaxed">
            {impactVisionCopy}
          </p>
        </div>
      </section>
    </>
  );
}
