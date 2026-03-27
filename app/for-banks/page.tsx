import type { Metadata } from "next";
import Link from "next/link";
import { Check, FileText, Landmark, MapPinned, Sprout, UserRound } from "lucide-react";
import {
  forBanksIntro,
  forBanksTraceabilityBullets,
  forBanksTraceabilityCopy,
} from "@/content/for-banks";

export const metadata: Metadata = {
  title: "For Banks & Financial Institutions — Digi Krishi",
  description: forBanksIntro,
};

const infoCards = [
  { icon: UserRound, label: "Farmer Identity" },
  { icon: MapPinned, label: "Land Documentation" },
  { icon: Sprout, label: "Crop Planning" },
  { icon: Landmark, label: "Group Governance" },
  { icon: FileText, label: "Production Monitoring" },
  { icon: FileText, label: "Transaction Records" },
] as const;

function Arrow() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-7 w-0 border-l-2 border-primary" aria-hidden />
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        className="-mt-px text-primary"
        aria-hidden
      >
        <path fill="currentColor" d="M12 16 6 10h12l-6 6Z" />
      </svg>
    </div>
  );
}

export default function ForBanksPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-flex rounded-full bg-primary-tint px-3 py-1 text-sm font-semibold text-primary">
            FINANCIAL INSTITUTIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold text-[#1E6B2E]">
            Bank Linkage &amp; Digital Traceability
          </h1>
          <p className="mt-4 max-w-2xl text-[#666666]">{forBanksIntro}</p>
        </div>
      </section>

      {/* KEY INFO */}
      <section className="bg-neutral-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-[#1E6B2E] md:text-3xl">
            Key Information Required for Agricultural Finance
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
            {infoCards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="rounded-xl border border-neutral-border bg-white p-6 transition-all duration-200 hover:border-primary hover:shadow-sm"
                >
                  <Icon className="h-7 w-7 text-[#2D8B3F]" aria-hidden />
                  <div className="mt-4 font-semibold text-[#1E6B2E]">{c.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACEABILITY */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1E6B2E] md:text-3xl">
              Role of Digital Traceability
            </h2>
            <p className="mt-4 text-[#666666]">{forBanksTraceabilityCopy}</p>
            <ul className="mt-6 space-y-3">
              {forBanksTraceabilityBullets.map((b) => (
                <li key={b} className="flex gap-3 text-[#333333]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Request Documentation Overview
            </Link>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="space-y-3">
              {["Farmer", "SHG", "FPO", "Market/Banks"].map((n, idx, arr) => (
                <div key={n} className="flex flex-col items-center">
                  <div className="w-full rounded-xl border-2 border-primary bg-primary-tint px-6 py-3 text-center font-semibold text-primary">
                    {n}
                  </div>
                  {idx < arr.length - 1 ? <Arrow /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

