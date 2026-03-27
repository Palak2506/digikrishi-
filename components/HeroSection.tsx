"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HERO_BG =
  "linear-gradient(135deg, #0a2e0f 0%, #1a4a1f 40%, #0d3b12 100%)";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const servicePills = [
  { label: "Farmer Registration", href: "/how-it-works" },
  { label: "Crop Planning", href: "/how-it-works" },
  { label: "SHG Formation", href: "/how-it-works" },
  { label: "Field Monitoring", href: "/how-it-works" },
  { label: "Market Linkage", href: "/how-it-works" },
  { label: "For Banks", href: "/for-banks" },
  { label: "Traceability", href: "/technology" },
] as const;

const bottomTabs = [
  { label: "What We Do", href: "#what-we-do", active: true },
  { label: "Our Stakeholders", href: "#our-stakeholders", active: false },
  { label: "For Banks", href: "#for-banks", active: false },
  { label: "Partner With Us", href: "#partner", active: false },
] as const;

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col"
      style={{ background: HERO_BG }}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center pb-28 pl-6 pr-6 pt-10 md:pl-20 md:pr-12">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 text-[14px] font-normal text-white/70"
        >
          Building Technologies for Digital Agriculture
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{
            duration: 0.5,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-[40px] font-extrabold leading-[1.1] text-white md:text-[72px]"
        >
          Farmers To Market
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{
            duration: 0.5,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 flex max-w-4xl flex-wrap"
        >
          {servicePills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="mb-2 mr-2 inline-flex rounded-[6px] bg-[#2D8B3F] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#1E6B2E]"
            >
              {pill.label}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Floating notification cards — desktop only */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] hidden md:block"
        aria-hidden
      >
        <div className="absolute right-[8%] top-[20%] w-56 rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-lg backdrop-blur-md">
          <div className="text-xs font-semibold text-[#2D8B3F]">SHG Update</div>
          <p className="mt-1 text-sm text-white">
            Group savings recorded · 24 members active
          </p>
        </div>
        <div className="absolute right-[5%] top-[45%] w-64 rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-lg backdrop-blur-md">
          <div className="text-xs font-semibold text-[#2D8B3F]">
            FPO Dashboard
          </div>
          <p className="mt-1 text-xs text-white/80">
            Total Registered Farmers: 1,240
          </p>
          <p className="mt-1 text-xs text-white/80">Crop Plans Active: 86</p>
          <p className="mt-1 text-xs text-white/80">Market Orders: 12</p>
        </div>
        <div className="absolute right-[10%] top-[68%] w-52 rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-lg backdrop-blur-md">
          <div className="text-xs font-semibold text-[#2D8B3F]">Field Agent</div>
          <p className="mt-1 text-sm text-white">
            Soil testing booked · Plot #A24
          </p>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/50 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-4 md:gap-0"
          aria-label="Page sections"
        >
          {bottomTabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className={
                tab.active
                  ? "cursor-pointer rounded-md bg-[#F4A322] px-8 py-4 font-semibold text-[#1E6B2E]"
                  : "cursor-pointer px-8 py-4 text-white/70 transition-colors hover:text-white"
              }
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
