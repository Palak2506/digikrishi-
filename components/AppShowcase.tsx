"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  Eye,
  FileCheck,
  FlaskConical,
  LayoutDashboard,
  Lightbulb,
  Map,
  MapPin,
  MessageSquare,
  Network,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

const tabs = ["Farmer App", "Agent App", "Admin Portal"] as const;

const farmerScreenBg =
  "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px), linear-gradient(180deg, #1a4a1f 0%, #2D8B3F 40%, #4a9a3f 70%, #6ab54a 100%)";

const agentScreenBg =
  "linear-gradient(180deg, #0d3b12 0%, #1E6B2E 50%, #2D8B3F 100%)";

const featureSets = [
  {
    title: "Farmer App",
    subtitle: "Empowering Farmers with Smart Digital Tools",
    items: [
      {
        icon: Map,
        title: "My Farms – Digital Land & Crop Records",
        desc: "Record land boundaries, crop history, and cultivation practices with GIS tagging.",
      },
      {
        icon: Lightbulb,
        title: "Smart Advisory – Stage-wise Guidance",
        desc: "Crop-specific recommendations with weather insights including temperature and rainfall forecasts.",
      },
      {
        icon: TrendingUp,
        title: "Crop Growth Tracker",
        desc: "Monitor real-time crop development stages and plan timely field interventions.",
      },
      {
        icon: FlaskConical,
        title: "Fertilizer Calculator",
        desc: "Customized nutrient recommendations with or without a Soil Health Card.",
      },
    ],
  },
  {
    title: "Agent App",
    subtitle: "Enabling Field Operations with Digital Precision",
    items: [
      {
        icon: UserPlus,
        title: "Farmer Onboarding & Profiling",
        desc: "Register farmers digitally, create profiles, upload and maintain KYC documentation.",
      },
      {
        icon: MapPin,
        title: "Land & Crop Data Management",
        desc: "Geo-tag land parcels, maintain plot records, track crop history across seasons.",
      },
      {
        icon: Network,
        title: "SHG & FPC Integration",
        desc: "Link farmers with SHGs and FPCs, maintain structured records of group participation.",
      },
      {
        icon: Eye,
        title: "Field Monitoring & Advisory",
        desc: "Update crop stages, provide activity-based guidance, support best practices per growth stage.",
      },
    ],
  },
  {
    title: "Admin Web Portal",
    subtitle: "Centralized Control for Agricultural Operations",
    items: [
      {
        icon: LayoutDashboard,
        title: "Dashboard Overview",
        desc: "Real-time snapshot: total farmers enrolled, FPCs onboarded, and SHGs associated.",
      },
      {
        icon: BarChart2,
        title: "Advanced Monitoring & Insights",
        desc: "District-wise, crop-wise, loan-wise monitoring with downloadable reports for banks.",
      },
      {
        icon: FileCheck,
        title: "Farmer Records & KYC Management",
        desc: "Complete farmer profiles with secure KYC document storage for institutional requirements.",
      },
      {
        icon: MessageSquare,
        title: "Advisory Support System",
        desc: "Ticket-based farmer query system with responses from certified agronomists.",
      },
    ],
  },
] as const;

function PhoneScreen({ tabIndex }: { tabIndex: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 overflow-hidden rounded-[32px]"
        style={
          tabIndex === 0
            ? { background: farmerScreenBg }
            : tabIndex === 1
              ? { background: agentScreenBg }
              : { background: "#F8F8F8" }
        }
      >
        {tabIndex === 0 ? (
          <>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-lg font-bold text-white">My Farms</p>
              <p className="mt-1 text-xs text-white/70">
                3 plots · 4.2 hectares tracked
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-2 py-1 text-xs text-white">
                  🌱 Wheat - Stage 4
                </span>
                <span className="rounded-full bg-[#F4A322]/80 px-2 py-1 text-xs text-white">
                  💧 Irrigation due
                </span>
              </div>
            </div>
          </>
        ) : null}

        {tabIndex === 1 ? (
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5">
            <p className="text-lg font-bold text-white">Field Operations</p>
            <p className="mt-1 text-xs text-white/70">
              12 farmers registered today
            </p>
            <div className="mt-3">
              <p className="mb-1 text-xs text-white/60">KYC Complete</p>
              <div className="h-2 w-full rounded-full bg-white/20">
                <div className="h-2 w-3/4 rounded-full bg-[#F4A322]" />
              </div>
            </div>
            <span className="mt-2 inline-block rounded-full bg-white/20 px-2 py-1 text-xs text-white">
              8 pending visits
            </span>
          </div>
        ) : null}

        {tabIndex === 2 ? (
          <div className="flex h-full flex-col">
            <div className="flex h-10 w-full shrink-0 items-center bg-[#1E6B2E] px-3">
              <span className="text-xs font-semibold text-white">
                Admin Dashboard
              </span>
            </div>
            <div className="flex-1 overflow-hidden px-3 pt-3">
              <div className="flex gap-2">
                <div className="flex-1 rounded bg-white p-2 text-center shadow-sm">
                  <div className="text-sm font-bold text-[#1E6B2E]">1,240</div>
                  <div className="text-xs text-[#666666]">Farmers</div>
                </div>
                <div className="flex-1 rounded bg-white p-2 text-center shadow-sm">
                  <div className="text-sm font-bold text-[#1E6B2E]">86</div>
                  <div className="text-xs text-[#666666]">Crop Plans</div>
                </div>
              </div>
              <div className="mt-3 flex items-end justify-center gap-2">
                <div className="h-8 w-8 rounded-t bg-[#2D8B3F]" />
                <div className="h-14 w-8 rounded-t bg-[#2D8B3F]" />
                <div className="h-10 w-8 rounded-t bg-[#2D8B3F]" />
                <div className="h-16 w-8 rounded-t bg-[#2D8B3F]" />
              </div>
              <p className="mt-1 text-center text-xs text-[#666666]">
                District Activity
              </p>
            </div>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}

export function AppShowcase() {
  const [selected, setSelected] = useState(0);

  return (
    <motion.section
      className="bg-white px-8 py-24"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-[#EAF6EC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D8B3F]">
            MOBILE & WEB PLATFORM
          </span>
          <h2 className="mt-3 text-[40px] font-extrabold text-[#1E6B2E]">
            Three Apps. One Ecosystem.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-[#666666]">
            A complete digital toolkit for every participant in the agricultural
            value chain.
          </p>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelected(i)}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                selected === i
                  ? "border border-[#2D8B3F] bg-[#2D8B3F] text-white"
                  : "border border-[#E8E8E8] bg-white text-[#666666] hover:border-[#2D8B3F]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="w-full shrink-0 lg:w-[45%]">
            <motion.div
              className="mx-auto"
              style={{ width: 260, height: 520 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="relative overflow-hidden rounded-[40px] border-[8px] border-[#2a2a2a] bg-[#1a1a1a]"
                style={{
                  width: 260,
                  height: 520,
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.3), inset 0 0 0 2px #3a3a3a",
                }}
              >
                <div
                  className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-[20px] bg-[#1a1a1a]"
                  style={{ width: 100, height: 28 }}
                />
                <div className="relative h-full w-full p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                    <PhoneScreen tabIndex={selected} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-[55%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-2 text-2xl font-extrabold text-[#1E6B2E]">
                  {featureSets[selected].title}
                </h3>
                <p className="mb-8 text-sm text-[#666666]">
                  {featureSets[selected].subtitle}
                </p>
                {featureSets[selected].items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="mb-6 flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6EC]">
                        <Icon
                          className="h-[18px] w-[18px] text-[#2D8B3F]"
                          strokeWidth={2}
                          aria-hidden
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1E6B2E]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-[1.6] text-[#666666]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
