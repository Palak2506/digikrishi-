"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Check,
  FileCheck,
  LayoutDashboard,
  Smartphone,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  technologyFeaturePillars,
  technologyIntro,
} from "@/content/technology";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function ArrowDown() {
  return (
    <div className="flex flex-col items-center py-2">
      <div
        className="h-8 w-0 border-l-2 border-primary"
        aria-hidden
      />
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="-mt-px text-primary"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M12 16 6 10h12l-6 6Z"
        />
      </svg>
    </div>
  );
}

const cardBase =
  "rounded-xl px-6 py-4 text-center font-semibold";

export function TechnologyPageSections() {
  const interfaces = [
    {
      icon: Smartphone,
      title: "Farmer",
      description: technologyIntro.farmerInterface,
    },
    {
      icon: Users,
      title: "Field Agent",
      description: technologyIntro.fieldAgentInterface,
    },
    {
      icon: LayoutDashboard,
      title: "Admin",
      description: technologyIntro.adminInterface,
    },
  ] as const;

  const pillarIcons = [Sprout, Activity, TrendingUp, FileCheck] as const;

  return (
    <>
      <motion.section
        {...sectionMotion}
        className="bg-primary-dark py-20 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Technology Platform
          </h2>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
            {interfaces.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="min-w-[280px] shrink-0 snap-center rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md md:min-w-0"
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionMotion}
        className="bg-white py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-[#1E6B2E] md:text-3xl">
            System Architecture
          </h2>

          <div className="mt-12 flex flex-col items-stretch">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <div
                className={`${cardBase} flex-1 border-2 border-primary bg-primary-tint text-primary sm:max-w-none`}
              >
                Farmers
              </div>
              <div
                className={`${cardBase} flex-1 border-2 border-primary bg-primary-tint text-primary sm:max-w-none`}
              >
                SHG — Local Groups
              </div>
            </div>

            <ArrowDown />

            <div
              className={`${cardBase} w-full border-2 border-primary bg-primary text-white`}
            >
              FPO — Aggregation & Market Coordination
            </div>

            <ArrowDown />

            <div className="grid grid-cols-1 gap-4 gap-y-4 sm:grid-cols-3">
              <div
                className={`${cardBase} border border-neutral-border bg-neutral-border text-neutral-text`}
              >
                Banks & Finance
              </div>
              <div
                className={`${cardBase} border border-neutral-border bg-neutral-border text-neutral-text`}
              >
                Buyers & Processors
              </div>
              <div
                className={`${cardBase} border border-neutral-border bg-neutral-border text-neutral-text`}
              >
                Market Participants
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionMotion}
        className="bg-neutral-bg py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-[#1E6B2E] md:text-3xl">
            Four Feature Pillars
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {technologyFeaturePillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-neutral-border bg-white p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-tint">
                    <Icon className="h-6 w-6 text-[#2D8B3F]" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1E6B2E]">
                    {pillar.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-[#666666]">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
}
