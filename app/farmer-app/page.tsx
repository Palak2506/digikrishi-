"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Check,
  Cloud,
  Image,
  Map,
  Share2,
} from "lucide-react";

const leftHeroBg = "linear-gradient(160deg, #0a2e0f 0%, #1a4a1f 100%)";
const phoneScreenBg =
  "linear-gradient(180deg, #0d1f10 0%, #1a3d1e 30%, #2D8B3F 70%, #3da84a 100%)";

const heroStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FarmerAppPage() {
  return (
    <div className="bg-white">
      <section className="flex min-h-screen flex-col md:flex-row md:gap-0">
        <motion.div
          className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16"
          style={{ background: leftHeroBg }}
          variants={heroStagger}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={heroItem}
            className="mb-8 inline-block rounded-full bg-[#F4A322] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#1E6B2E]"
          >
            FARMER APP
          </motion.span>
          <motion.h1
            variants={heroItem}
            className="mb-8 text-[40px] font-black leading-none md:text-[64px]"
          >
            <span className="block text-white">Smart Farming</span>
            <span className="block text-[#5AB56A]">In Your</span>
            <span className="block text-[#5AB56A]">Pocket.</span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mb-10 max-w-xs text-[15px] leading-[1.7] text-white/70"
          >
            Empowering farmers with digital land records, smart crop advisory,
            growth tracking, and precision fertilizer guidance.
          </motion.p>
          <motion.div variants={heroItem} className="flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-xl bg-[#F4A322] px-6 py-3 text-sm font-bold text-[#1E6B2E] transition-colors hover:bg-[#e6931a]"
            >
              Download App
            </button>
            <Link
              href="#features"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm text-white transition-colors hover:bg-white/15"
            >
              View Features →
            </Link>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="mt-14 flex flex-wrap gap-10"
          >
            {[
              { n: "1,240+", l: "FARMERS ACTIVE" },
              { n: "4", l: "CORE FEATURES" },
              { n: "6+", l: "CROP LANGUAGES" },
            ].map((s) => (
              <div key={s.l}>
                <span className="block text-[28px] font-extrabold text-[#F4A322]">
                  {s.n}
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">
                  {s.l}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#2D8B3F] md:w-1/2">
          <div
            className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-white/[0.04]"
            aria-hidden
          />
          <div
            className="absolute bottom-10 -left-6 h-48 w-48 rounded-full bg-white/[0.04]"
            aria-hidden
          />

          <motion.div
            className="relative z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="relative overflow-hidden rounded-[36px] border-[6px] border-[#1a1a1a] bg-[#111111]"
              style={{
                width: 240,
                height: 480,
                boxShadow:
                  "0 50px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-[#111]"
                style={{ width: 88, height: 24 }}
              />
              <div
                className="relative h-full w-full overflow-hidden"
                style={{ background: phoneScreenBg }}
              >
                <div className="absolute inset-0 flex flex-col p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="h-0.5 w-5 bg-white/60" />
                      <div className="h-0.5 w-5 bg-white/60" />
                      <div className="h-0.5 w-5 bg-white/60" />
                    </div>
                    <Bell className="h-4 w-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="mb-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
                    <p className="mb-1 text-xs font-semibold text-white/60">
                      LIVE UPDATES
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Irrigation Due Tomorrow
                    </p>
                  </div>
                  <div className="mb-4 flex gap-3">
                    <div className="flex-1 rounded-xl bg-black/30 p-3">
                      <p className="mb-1 text-xs text-white/50">Temp</p>
                      <p className="text-xl font-bold text-white">32°C</p>
                    </div>
                    <div className="flex-1 rounded-xl bg-black/30 p-3">
                      <p className="mb-1 text-xs text-white/50">Rain</p>
                      <p className="text-xl font-bold text-white">12%</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-8">
                    <p className="mb-1 text-base font-bold text-white">
                      My Farms
                    </p>
                    <p className="mb-3 text-xs text-white/60">
                      3 plots · Wheat & Rice · 4.2 hectares
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/15 px-2 py-1 text-xs text-white">
                        Stage 4 — Flowering
                      </span>
                      <span className="rounded-full bg-[#F4A322]/70 px-2 py-1 text-xs text-white">
                        Irrigation Due
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-[-10px] top-[15%] z-20 w-40 rounded-xl bg-white p-3 shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="mb-1 flex items-center gap-2">
              <Cloud className="h-3.5 w-3.5 text-[#666666]" strokeWidth={2} />
              <span className="text-xs font-semibold text-[#666666]">
                WEATHER
              </span>
            </div>
            <p className="text-sm font-semibold text-[#333333]">
              Partly Cloudy
            </p>
            <p className="mt-0.5 text-xs text-[#666666]">28°C · Low Rain</p>
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[-10px] z-20 w-[180px] rounded-xl bg-[#1a3d1e] p-3 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="mb-1 text-xs font-bold text-[#F4A322]">ADVISORY</p>
            <p className="text-xs font-medium leading-relaxed text-white">
              Apply NPK 19:19:19 to boost flowering stage.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="features" className="bg-white px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-lg">
            <h2 className="mb-3 text-[40px] font-extrabold text-[#1E6B2E]">
              Cultivating Precision
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#666666]">
              Every feature is designed to bridge the gap between traditional
              wisdom and modern agronomy.
            </p>
          </div>

          <div className="grid min-h-0 grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#EAF6EC] p-10 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              style={{ transition: "transform 0.2s ease" }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `repeating-radial-gradient(circle at 20% 50%, transparent 0, transparent 50px, rgba(45,139,63,0.06) 50px, rgba(45,139,63,0.06) 51px), repeating-radial-gradient(circle at 80% 30%, transparent 0, transparent 70px, rgba(45,139,63,0.04) 70px, rgba(45,139,63,0.04) 71px)`,
                }}
              />
              <span
                className="pointer-events-none absolute right-4 top-[-20px] font-black leading-none text-[#2D8B3F]/[0.06]"
                style={{ fontSize: 140 }}
                aria-hidden
              >
                01
              </span>
              <span className="relative mb-6 inline-block rounded-full bg-[#2D8B3F] px-3 py-1 text-[11px] font-bold uppercase text-white">
                MY FARMS
              </span>
              <h3 className="relative mb-4 text-[28px] font-extrabold leading-[1.2] text-[#1E6B2E]">
                Digital Land & Crop Records
              </h3>
              <p className="relative mb-8 text-sm leading-[1.8] text-[#666666]">
                Maintain structured digital records of your land parcels and
                crop history. Each plot is GIS-tagged for precise identification.
              </p>
              <ul className="relative space-y-3">
                {[
                  "Land parcel boundaries and location",
                  "Crop history across seasons",
                  "Cultivation practices per plot",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D8B3F]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-[#333333]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <Map
                className="pointer-events-none absolute bottom-6 right-6 h-[100px] w-[100px] text-[#2D8B3F]/[0.12]"
                strokeWidth={1}
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#1E6B2E] p-10 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              style={{ transition: "transform 0.2s ease" }}
            >
              <span
                className="pointer-events-none absolute right-4 top-[-20px] font-black leading-none text-white/[0.05]"
                style={{ fontSize: 140 }}
                aria-hidden
              >
                02
              </span>
              <span className="relative mb-6 inline-block rounded-full bg-[#F4A322] px-3 py-1 text-[11px] font-bold text-[#1E6B2E]">
                SMART ADVISORY
              </span>
              <h3 className="relative mb-4 text-[28px] font-extrabold leading-[1.2] text-white">
                Stage-wise Crop Guidance
              </h3>
              <p className="relative mb-8 text-sm leading-[1.8] text-white/75">
                Receive timely cultivation recommendations tailored to your crop
                variety at every growth stage.
              </p>
              <div className="relative rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-[10px]">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.05em] text-white">
                  Weather Insights
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["TEMPERATURE", "28°C"],
                    ["RAINFALL", "0.5mm"],
                    ["HUMIDITY", "65%"],
                    ["WIND SPEED", "12km/h"],
                  ].map(([lab, val]) => (
                    <div key={lab}>
                      <p className="mb-1 text-xs uppercase tracking-wide text-white/50">
                        {lab}
                      </p>
                      <p className="text-2xl font-bold text-white">{val}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">
                    Crop-specific
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">
                    Stage-wise
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 grid min-h-0 grid-cols-1 gap-6 lg:grid-cols-[2fr_1.5fr_1.5fr]">
            <motion.div
              className="relative rounded-3xl bg-[#F8F8F8] p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              style={{ transition: "transform 0.2s ease" }}
            >
              <span className="mb-5 inline-block rounded-full bg-[#EAF6EC] px-3 py-1 text-[11px] font-bold text-[#2D8B3F]">
                GROWTH TRACKER
              </span>
              <h3 className="mb-4 text-[22px] font-extrabold leading-[1.2] text-[#1E6B2E]">
                Monitor Your Field Progress
              </h3>
              <p className="mb-8 text-[13px] leading-[1.7] text-[#666666]">
                Track real-time crop development and plan timely interventions
                from sowing to harvest.
              </p>
              <p className="mb-4 text-xs font-semibold text-[#333333]">
                Wheat — Current Stage
              </p>
              <div className="relative px-3 pb-8 pt-2">
                <div className="absolute left-12 right-12 top-[6px] flex h-0.5">
                  <div className="h-0.5 w-[40%] bg-[#2D8B3F]" />
                  <div className="h-0.5 flex-1 bg-[#E8E8E8]" />
                </div>
                <div className="relative flex justify-between">
                  {[
                    { label: "Sowing", dotGreen: true, labelActive: false },
                    { label: "Germination", dotGreen: true, labelActive: false },
                    {
                      label: "Tillering",
                      dotGreen: true,
                      labelActive: true,
                      ring: true,
                    },
                    { label: "Flowering", dotGreen: false, labelActive: false },
                    { label: "Harvest", dotGreen: false, labelActive: false },
                  ].map((stage) => (
                    <div
                      key={stage.label}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className={[
                          "h-3 w-3 rounded-full",
                          stage.dotGreen ? "bg-[#2D8B3F]" : "bg-[#E8E8E8]",
                          stage.ring
                            ? "ring-2 ring-[#2D8B3F] ring-offset-2 ring-offset-[#F8F8F8]"
                            : "",
                        ].join(" ")}
                      />
                      <span
                        className={[
                          "mt-2 text-xs",
                          stage.labelActive
                            ? "font-semibold text-[#2D8B3F]"
                            : "text-[#999999]",
                        ].join(" ")}
                      >
                        {stage.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-center text-xs italic text-[#666666]">
                Next milestone: Flowering expected in 14 days.
              </p>
            </motion.div>

            <motion.div
              className="rounded-3xl bg-[#2D8B3F] p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              style={{ transition: "transform 0.2s ease" }}
            >
              <span className="mb-5 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#2D8B3F]">
                FERTILIZER CALC
              </span>
              <h3 className="mb-4 text-[22px] font-extrabold leading-[1.2] text-white">
                Balanced Nutrient Guidance
              </h3>
              <div className="mt-2 flex flex-col gap-3">
                <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase text-white/50">
                    Option A
                  </p>
                  <p className="text-sm font-semibold text-white">
                    No Soil Health Card?
                  </p>
                </div>
                <div className="rounded-xl border border-white/25 bg-white/[0.18] p-4">
                  <p className="mb-1 text-xs font-semibold uppercase text-white/50">
                    Option B
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Have a Soil Health Card?
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-between rounded-3xl bg-[#8B6000] p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              style={{ transition: "transform 0.2s ease" }}
            >
              <div>
                <h3 className="mb-3 text-[22px] font-extrabold leading-[1.2] text-white">
                  Start Using Digi Krishi Today
                </h3>
                <p className="mb-6 text-[13px] leading-[1.7] text-white/70">
                  Available for Android. Simple interface in regional languages.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl bg-white px-5 py-4 text-left text-sm font-bold text-[#8B6000] transition-colors hover:bg-white/90"
                >
                  <span>Download App</span>
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
                </button>
                <p className="mt-4 text-center text-xs text-white/50">
                  Free for all registered farmers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] px-8 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-3 text-4xl font-extrabold text-[#1E6B2E]">
            How It Works
          </h2>
          <p className="mb-16 text-[15px] text-[#666666]">
            Three simple steps to digitize your farm operations.
          </p>

          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0">
            {(
              [
                {
                  n: "1",
                  t: "Register with Agent",
                  d: "Connect with your local authorized Digi Krishi representative to create your secure profile.",
                },
                {
                  n: "2",
                  t: "Add Your Farm",
                  d: "Geotag your plots and enter crop details to get started with precision monitoring.",
                },
                {
                  n: "3",
                  t: "Start Planning",
                  d: "Receive daily alerts, customized nutrient schedules, and expert agricultural support.",
                },
              ] as const
            ).flatMap((step, idx) => {
              const stepEl = (
                <motion.div
                  key={step.n}
                  className="flex w-[220px] flex-col items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B6000] text-2xl font-extrabold text-white shadow-[0_8px_24px_rgba(139,96,0,0.3)]">
                    {step.n}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#1E6B2E]">
                    {step.t}
                  </h3>
                  <p className="max-w-xs text-[13px] leading-[1.7] text-[#666666]">
                    {step.d}
                  </p>
                </motion.div>
              );
              if (idx < 2) {
                return [
                  stepEl,
                  <div
                    key={`arrow-${step.n}`}
                    className="hidden items-center self-start px-4 pb-0 pt-7 text-[28px] font-black text-[#F4A322] md:flex"
                    aria-hidden
                  >
                    →
                  </div>,
                ];
              }
              return [stepEl];
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#1E6B2E] px-8 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-bold text-white">Digi Krishi</h3>
            <p className="mb-6 text-xs text-white/50">
              © 2026 Digi Krishi. Cultivating Precision for a Sustainable Future.
            </p>
            <div className="flex gap-4 text-xs text-white/50">
              <Link href="/" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="md:text-right">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              CONNECT WITH US
            </p>
            <Link
              href="/"
              className="mb-2 block text-sm text-white/70 hover:text-white"
            >
              AgTech Blog
            </Link>
            <Link
              href="/contact"
              className="block text-sm text-white/70 hover:text-white"
            >
              Contact Support
            </Link>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Instagram"
            >
              <Image className="h-4 w-4 text-white" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Twitter"
            >
              <Share2 className="h-4 w-4 text-white" strokeWidth={2} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
