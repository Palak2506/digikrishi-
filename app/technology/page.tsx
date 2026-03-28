"use client";

import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import {
  BarChart2,
  Bike,
  CheckCircle,
  ChevronDown,
  Database,
  FileChartColumn,
  Landmark,
  LayoutGrid,
  Map,
  Monitor,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Sprout,
  Users,
  Wifi,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Footer } from "@/components/Footer";

const heroGridBg =
  "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(45,139,63,0.07) 60px, rgba(45,139,63,0.07) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(45,139,63,0.07) 60px, rgba(45,139,63,0.07) 61px)";

const platformPills = [
  { Icon: Smartphone, label: "Farmer App" },
  { Icon: Users, label: "Agent App" },
  { Icon: Monitor, label: "Admin Portal" },
] as const;

const platformCards = [
  {
    n: "01",
    top: "#2D8B3F",
    iconBg: "#EAF6EC",
    iconColor: "#2D8B3F",
    Icon: Bike,
    title: "Farmer Mobile App",
    desc: "Empowering growers with digital identities, precision GIS mapping, and real-time crop advisory services directly in their pockets.",
    features: ["GIS Land Mapping", "Crop Health Advisory"],
  },
  {
    n: "02",
    top: "#F4A322",
    iconBg: "#FFF8EE",
    iconColor: "#F4A322",
    Icon: ShieldCheck,
    title: "Agent Field App",
    desc: "Streamlining last-mile data collection with offline-first KYC uploads and interactive land boundary tagging for field officers.",
    features: ["KYC Digital Upload", "Boundary Tagging"],
  },
  {
    n: "03",
    top: "#1E6B2E",
    iconBg: "#EAF6EC",
    iconColor: "#1E6B2E",
    Icon: LayoutGrid,
    title: "Admin Web Portal",
    desc: "Centralized oversight with live performance dashboards and bank-ready automated documentation for institutional stakeholders.",
    features: ["Live Data Dashboard", "Institutional Reports"],
  },
] as const;

const capabilityCards = [
  {
    Icon: Map,
    title: "GIS Land Mapping",
    desc: "High-precision satellite boundary definition with multi-polygon support for diverse topography.",
  },
  {
    Icon: ShieldCheck,
    title: "KYC & Identity",
    desc: "Integrated digital verification system for farmer onboarding, ensuring regulatory compliance and trust.",
  },
  {
    Icon: Sprout,
    title: "Crop Intelligence",
    desc: "Advanced algorithmic insights for yield prediction and early disease detection across large-scale plots.",
  },
  {
    Icon: Database,
    title: "Data Traceability",
    desc: "End-to-end immutable audit trails for every farm interaction, providing transparency for export compliance.",
  },
  {
    Icon: FileChartColumn,
    title: "Institutional Reports",
    desc: "Automated document generation for loan applications, crop insurance, and stakeholder audits.",
  },
  {
    Icon: Wifi,
    title: "Real-time Sync",
    desc: "Ultra-low latency data synchronization between field applications and central servers even in 2G areas.",
  },
] as const;

function CountStat({
  target,
  format,
  label,
  sublabel,
}: {
  target: number;
  format: (n: number) => string;
  label: string;
  sublabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => format(Math.round(latest)));
  const [text, setText] = useState(format(0));

  useMotionValueEvent(display, "change", (v) => {
    setText(v);
  });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, target, { duration: 2, ease: "easeOut" });
    return () => ctrl.stop();
  }, [inView, target, count]);

  return (
    <div ref={ref} className="text-center">
      <span className="block text-[40px] font-black leading-none text-[#F4A322] sm:text-[64px]">
        {text}
      </span>
      <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
        {label}
      </p>
      {sublabel ? (
        <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/50">
          {sublabel}
        </p>
      ) : null}
    </div>
  );
}

function ArchitectureConnector({ label }: { label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 py-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="w-px origin-top bg-[#2D8B3F]/40"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{ height: 40 }}
      />
      <span className="rounded-full border border-[#E8E8E8] bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#999]">
        {label}
      </span>
      <motion.div
        className="w-px origin-top bg-[#2D8B3F]/40"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
        style={{ height: 40 }}
      />
      <ChevronDown className="h-3.5 w-3.5 text-[#2D8B3F]" strokeWidth={2} />
    </motion.div>
  );
}

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section
        className="relative flex min-h-[480px] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
        style={{
          background:
            "linear-gradient(180deg, #050f07 0%, #0a1f0c 50%, #0d2e10 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ backgroundImage: heroGridBg }}
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-block rounded-full border border-[#2D8B3F]/30 bg-[#2D8B3F]/15 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#5AB56A]"
          >
            PLATFORM OVERVIEW
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mb-1 block text-3xl font-black leading-[1.1] text-white md:text-[56px]"
          >
            Built for Every Layer of
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mb-6 block text-3xl font-black leading-[1.1] text-[#F4A322] md:text-[56px]"
          >
            Agricultural Operations
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mx-auto mb-12 max-w-[480px] text-[17px] leading-[1.7] text-white/55"
          >
            A robust, multi-tenant digital ecosystem designed to bridge the
            gap between rural smallholders and global financial institutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.5 },
              },
            }}
          >
            {platformPills.map(({ Icon, label }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 py-2.5"
                style={{ gap: 8 }}
              >
                <Icon
                  className="shrink-0 text-[#5AB56A]"
                  size={15}
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-[13px] font-medium text-white">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto mt-10"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown
              className="mx-auto text-white/25"
              size={20}
              strokeWidth={2}
              aria-hidden
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PLATFORM CARDS */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {platformCards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <motion.article
                key={card.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2D8B3F] hover:shadow-[0_24px_48px_rgba(0,0,0,0.1)]"
              >
                <div
                  className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl"
                  style={{ background: card.top }}
                />
                <span
                  className="pointer-events-none absolute right-5 top-4 text-[64px] font-black leading-none text-[#F0F0F0]"
                  aria-hidden
                >
                  {card.n}
                </span>
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: card.iconBg }}
                >
                  <Icon
                    className="h-[22px] w-[22px]"
                    style={{ color: card.iconColor }}
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mb-2 text-[19px] font-bold text-[#1E6B2E]">
                  {card.title}
                </h3>
                <p className="mb-6 text-[13px] leading-[1.75] text-[#666]">
                  {card.desc}
                </p>
                <ul className="space-y-2.5">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle
                        className="shrink-0 text-[#2D8B3F]"
                        size={15}
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="text-[13px] font-medium text-[#444]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — ARCHITECTURE */}
      <section className="bg-[#F8F8F8] px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-4xl font-extrabold text-[#1E6B2E]"
        >
          Our Vertical Data Architecture
        </motion.h2>

        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-0">
          {/* Tier 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-[100px_1fr] md:items-start"
          >
            <div className="hidden md:block">
              <p className="text-xs font-bold uppercase text-[#999]">
                TIER 01
              </p>
              <p className="mt-1 text-xs text-[#999]">Field Layer</p>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#E8E8E8] bg-white px-6 py-5 md:flex-row md:justify-center md:gap-4">
              <div className="flex flex-1 items-center gap-3 rounded-[10px] border border-[#E8E8E8] bg-[#F8F8F8] px-6 py-4 md:max-w-[200px]">
                <Smartphone
                  className="shrink-0 text-[#2D8B3F]"
                  size={18}
                  strokeWidth={2}
                />
                <span className="text-sm font-semibold text-[#1E6B2E]">
                  Farmer App
                </span>
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-[10px] border border-[#E8E8E8] bg-[#F8F8F8] px-6 py-4 md:max-w-[200px]">
                <Users
                  className="shrink-0 text-[#2D8B3F]"
                  size={18}
                  strokeWidth={2}
                />
                <span className="text-sm font-semibold text-[#1E6B2E]">
                  Agent App
                </span>
              </div>
            </div>
          </motion.div>

          <ArchitectureConnector label="STRUCTURED DATA SYNC" />

          {/* Tier 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-[100px_1fr] md:items-start"
          >
            <div className="hidden md:block">
              <p className="text-xs font-bold uppercase text-[#999]">
                TIER 02
              </p>
              <p className="mt-1 text-xs text-[#999]">Core Platform</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-[#1E6B2E] px-8 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Sparkles
                  className="shrink-0 text-white"
                  size={20}
                  strokeWidth={2}
                />
                <span className="text-base font-bold text-white">
                  Digi Krishi Core Platform
                </span>
              </div>
              <span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/60">
                v1.3.2 stable
              </span>
            </div>
          </motion.div>

          <ArchitectureConnector label="VERIFIED RECORDS" />

          {/* Tier 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-[100px_1fr] md:items-start"
          >
            <div className="hidden md:block">
              <p className="text-xs font-bold uppercase text-[#999]">
                TIER 03
              </p>
              <p className="mt-1 text-xs text-[#999]">Institutional</p>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#E8E8E8] bg-white px-6 py-5 md:flex-row md:justify-center md:gap-4">
              <div className="flex flex-1 items-center gap-3 rounded-[10px] border border-[#E8E8E8] bg-[#F8F8F8] px-6 py-4">
                <Landmark
                  className="shrink-0 text-[#2D8B3F]"
                  size={18}
                  strokeWidth={2}
                />
                <span className="text-sm font-semibold text-[#1E6B2E]">
                  Banks
                </span>
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-[10px] border border-[#E8E8E8] bg-[#F8F8F8] px-6 py-4">
                <ShoppingBag
                  className="shrink-0 text-[#2D8B3F]"
                  size={18}
                  strokeWidth={2}
                />
                <span className="text-sm font-semibold text-[#1E6B2E]">
                  AgriBuyers
                </span>
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-[10px] border border-[#E8E8E8] bg-[#F8F8F8] px-6 py-4">
                <BarChart2
                  className="shrink-0 text-[#2D8B3F]"
                  size={18}
                  strokeWidth={2}
                />
                <span className="text-sm font-semibold text-[#1E6B2E]">
                  FPC Admins
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CAPABILITIES */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-3 text-4xl font-extrabold text-[#1E6B2E]">
            Core Platform Capabilities
          </h2>
          <p className="mb-16 max-w-2xl text-[15px] text-[#666]">
            Deep technical modules designed to solve specific friction points in
            the agricultural value chain.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((c, i) => {
              const Icon = c.Icon;
              return (
                <motion.article
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-[14px] border border-transparent bg-[#F8F8F8] p-7 transition-all duration-[250ms] hover:border-[#2D8B3F] hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                >
                  <Icon
                    className="mb-4 text-[#2D8B3F]"
                    size={22}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <h3 className="mb-3 text-base font-bold text-[#1E6B2E]">
                    {c.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75] text-[#666]">
                    {c.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — STATS */}
      <section className="bg-[#1E6B2E] px-8 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-20">
          <CountStat
            target={7}
            format={(n) => `${n}-Step`}
            label="VALUE CHAIN DIGITIZED"
          />
          <CountStat
            target={3}
            format={(n) => `${n}+`}
            label="INSTITUTIONAL PARTNERS"
          />
          <CountStat
            target={10}
            format={(n) => `${n}K+`}
            label="ACTIVE FPOS"
          />
          <CountStat
            target={100}
            format={(n) => `${n}%`}
            label="DIGITAL RECORDS"
          />
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white px-8 py-24 text-center"
      >
        <h2 className="mb-4 text-4xl font-extrabold text-[#1E6B2E]">
          Ready to implement Digi Krishi?
        </h2>
        <p className="mx-auto mb-12 max-w-[500px] text-base text-[#666]">
          Join the leading agricultural institutions leveraging our technology
          to transform rural economies.
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:mx-0 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-[#2D8B3F] px-8 py-4 text-center text-[15px] font-bold text-white transition-colors hover:bg-[#1E6B2E]"
          >
            Partner with Us
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-xl border-2 border-[#2D8B3F] bg-transparent px-8 py-4 text-center text-[15px] font-semibold text-[#2D8B3F] transition-colors hover:bg-[#EAF6EC]"
          >
            View How It Works
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
