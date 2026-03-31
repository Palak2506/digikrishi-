"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  Bell,
  Droplets,
  Eye,
  FileCheck,
  FlaskConical,
  LayoutDashboard,
  Lightbulb,
  Map,
  MapPin,
  MessageSquare,
  Network,
  Sun,
  Thermometer,
  TrendingUp,
  UserPlus,
  Wind,
} from "lucide-react";
import { useState } from "react";

const tabs = ["Farmer App", "Agent App", "Admin Portal"] as const;

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

const mapGridBg =
  "repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(45,139,63,0.15) 15px, rgba(45,139,63,0.15) 16px), repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(45,139,63,0.15) 15px, rgba(45,139,63,0.15) 16px)";

function PhoneTopBar() {
  return (
    <div className="sticky top-0 z-10 flex shrink-0 justify-between bg-[#111] px-4 py-3">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt=""
          width={24}
          height={24}
          className="rounded-full"
          style={{ objectFit: "cover" }}
        />
        <span className="ml-2 text-sm font-semibold text-white">
          Digi Krishi
        </span>
      </div>
      <div className="relative flex items-start pt-0.5">
        <Bell className="h-4 w-4 text-white" strokeWidth={2} aria-hidden />
        <span
          className="-ml-1 -mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2D8B3F]"
          aria-hidden
        />
      </div>
    </div>
  );
}

function FarmerPhoneScreenContent() {
  const miniStats = [
    { Icon: Droplets, value: "12mm", label: "Rain" },
    { Icon: Wind, value: "14km", label: "Wind" },
    { Icon: Thermometer, value: "65%", label: "Humid" },
    { Icon: Sun, value: "6.2h", label: "Sunlight" },
  ] as const;

  const plots = [
    { name: "Plot A", ha: "2.1 ha" },
    { name: "Plot B", ha: "1.4 ha" },
    { name: "Plot C", ha: "0.7 ha" },
  ] as const;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#0d0d0d]">
      <PhoneTopBar />
      <div className="min-h-0 flex-1 overflow-y-auto pb-4">
        <div className="mx-3 mt-3 rounded-2xl border border-[#222] bg-[#1a1a1a] p-4">
          <div className="flex justify-between">
            <span className="text-xs font-medium uppercase text-white/60">
              Today&apos;s Weather
            </span>
            <span className="text-xs text-white">Partly Cloudy</span>
          </div>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-3xl font-extrabold text-white">32°C</span>
            <span className="mb-1 text-lg text-white/40">/ 24°C</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {miniStats.map(({ Icon, value, label }) => (
              <div
                key={label}
                className="rounded-lg bg-[#111] p-2 text-center"
              >
                <Icon
                  className="mx-auto h-3 w-3 text-[#2D8B3F]"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="mt-1 text-xs font-semibold text-white">{value}</p>
                <p className="text-xs text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-3 mt-3 rounded-2xl border border-[#222] bg-[#1a1a1a] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">
              Crop Advisory
            </span>
            <span className="rounded-full bg-[#2D8B3F]/20 px-2 py-0.5 text-xs font-medium text-[#2D8B3F]">
              Wheat
            </span>
          </div>
          <div className="flex gap-3">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2D8B3F]"
              aria-hidden
            />
            <p className="text-xs leading-relaxed text-white/80">
              Apply NPK 19:19:19 fertilizer this week for optimal flowering
              stage nutrition.
            </p>
          </div>
          <div className="my-3 border-t border-white/5" />
          <div className="flex gap-3">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F4A322]"
              aria-hidden
            />
            <p className="text-xs leading-relaxed text-white/80">
              Irrigation recommended within 48 hours. Soil moisture below
              optimal threshold.
            </p>
          </div>
        </div>

        <div className="mx-3 mt-3 rounded-2xl border border-[#222] bg-[#1a1a1a] p-4">
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-white">My Farms</span>
            <span className="text-xs text-white/40">3 plots</span>
          </div>
          <div className="mt-2 flex gap-2">
            {plots.map((p) => (
              <div
                key={p.name}
                className="flex-1 rounded-lg border border-[#2D8B3F]/30 bg-[#2D8B3F]/15 px-3 py-2 text-center"
              >
                <p className="text-xs font-semibold text-white">{p.name}</p>
                <p className="mt-0.5 text-xs text-white/40">{p.ha}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentPhoneScreenContent() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#0d0d0d]">
      <PhoneTopBar />
      <div className="min-h-0 flex-1 overflow-y-auto pb-4">
        <div className="mx-3 mt-3 rounded-2xl border border-[#222] bg-[#1a1a1a] p-4">
          <p className="mb-3 text-sm font-semibold text-white">
            Farmer Onboarding
          </p>
          <div className="h-2 w-full rounded-full bg-[#222]">
            <div className="h-2 w-3/4 rounded-full bg-[#2D8B3F]" />
          </div>
          <p className="mt-2 text-xs text-white/50">
            Step 3 of 4 — KYC Upload
          </p>
        </div>

        <div className="mx-3 mt-3 rounded-2xl border border-[#222] bg-[#1a1a1a] p-3">
          <p className="mb-3 text-sm font-semibold text-white">
            Plot Geo-Tagging
          </p>
          <div
            className="relative h-20 overflow-hidden rounded-xl border border-[#333] bg-[#111]"
            style={{ position: "relative" }}
          >
            <div
              className="absolute inset-0"
              style={{ background: mapGridBg }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-4 rounded-lg border-2 border-dashed border-[#2D8B3F]/60"
              aria-hidden
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-5 w-5 text-[#F4A322]" strokeWidth={2} />
            </div>
          </div>
          <div className="mt-2 flex justify-between text-xs">
            <span className="text-white/50">26.1445°N</span>
            <span className="text-white/50">91.7362°E</span>
            <span className="font-semibold text-[#2D8B3F]">2.4 ha</span>
          </div>
        </div>

        <div className="mx-3 mt-3 rounded-2xl border border-[#222] bg-[#1a1a1a] p-4">
          <p className="mb-3 text-sm font-semibold text-white">
            Today&apos;s Field Visits
          </p>
          <div className="flex items-center justify-between border-b border-white/5 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2D8B3F]" />
              <span className="text-xs text-white">Ramesh Kumar — KYC</span>
            </div>
            <span className="rounded-full bg-[#2D8B3F]/20 px-2 py-0.5 text-xs font-medium text-[#2D8B3F]">
              Done
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-white/5 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F4A322]" />
              <span className="text-xs text-white">Sunita Devi — Land Map</span>
            </div>
            <span className="rounded-full bg-[#F4A322]/20 px-2 py-0.5 text-xs font-medium text-[#F4A322]">
              Pending
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="text-xs text-white">Mohan Singh — Advisory</span>
            </div>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/50">
              Due
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen({ tabIndex }: { tabIndex: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col overflow-hidden rounded-[32px] bg-[#0d0d0d]"
        style={{ margin: 0, padding: 0 }}
      >
        {tabIndex === 0 ? <FarmerPhoneScreenContent /> : null}
        {tabIndex === 1 ? <AgentPhoneScreenContent /> : null}
      </motion.div>
    </AnimatePresence>
  );
}

function PhoneMockup({ tabIndex }: { tabIndex: 0 | 1 }) {
  return (
    <div className="mx-auto" style={{ width: 260, height: 520 }}>
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
            <PhoneScreen tabIndex={tabIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminLaptopMockup() {
  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.15))",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #c8c8c8 0%, #b8b8b8 100%)",
          borderRadius: "16px 16px 0 0",
          padding: "3px",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "280px",
            overflow: "hidden",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <img
            src="/admin-dashboard.png"
            alt="Admin Dashboard"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top left",
            }}
          />
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(180deg, #a0a0a0 0%, #b8b8b8 100%)",
          height: "5px",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "3px",
            background: "#888",
            borderRadius: "0 0 2px 2px",
          }}
        />
      </div>

      <div
        style={{
          background:
            "linear-gradient(180deg, #d0d0d0 0%, #c0c0c0 50%, #b0b0b0 100%)",
          height: "18px",
          width: "100%",
          marginLeft: 0,
          borderRadius: "0 0 8px 8px",
          boxShadow:
            "0 6px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "12%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            gap: "3px",
          }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                width: "2px",
                height: "2px",
                background: "rgba(0,0,0,0.2)",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            right: "12%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            gap: "3px",
          }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                width: "2px",
                height: "2px",
                background: "rgba(0,0,0,0.2)",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 40px",
          marginTop: "2px",
        }}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "4px",
              background: "#888",
              borderRadius: "0 0 3px 3px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          />
        ))}
      </div>
    </div>
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
              className="mx-auto flex justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div style={{ position: "relative", width: "100%" }}>
                <div
                  style={{
                    opacity: selected === 0 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: selected === 0 ? "auto" : "none",
                    position: selected === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <PhoneMockup tabIndex={0} />
                </div>
                <div
                  style={{
                    opacity: selected === 1 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: selected === 1 ? "auto" : "none",
                    position: selected === 1 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <PhoneMockup tabIndex={1} />
                </div>
                <div
                  style={{
                    opacity: selected === 2 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: selected === 2 ? "auto" : "none",
                    position: selected === 2 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <AdminLaptopMockup />
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
                style={{ margin: 0, padding: 0 }}
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
