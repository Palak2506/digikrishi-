"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle,
  Database,
  Eye,
  GitBranch,
  Hash,
  Landmark,
  Map,
  Monitor,
  Smartphone,
  Sprout,
  SquareCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { Footer } from "@/components/Footer";

const heroLeftGrid =
  "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(45,139,63,0.12) 40px, rgba(45,139,63,0.12) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(45,139,63,0.12) 40px, rgba(45,139,63,0.12) 41px)";

const missionValues = [
  {
    border: "#2D8B3F",
    title: "Transparency",
    desc: "Real-time data access for all stakeholders, from soil health to transaction logs.",
  },
  {
    border: "#F4A322",
    title: "Connectivity",
    desc: "Linking rural FPCs with national banks and international export markets.",
  },
  {
    border: "#5AB56A",
    title: "Trust",
    desc: "Verified digital signatures and immutable records to secure farmer identities.",
  },
] as const;

const policySmallCards = [
  {
    Icon: Database,
    title: "Digital Record Infrastructure",
    desc: "Standardizing farmer registries to meet national digital mission standards.",
  },
  {
    Icon: GitBranch,
    title: "Cluster-Based Support",
    desc: "Optimizing resource allocation for regional agricultural clusters.",
  },
  {
    Icon: TrendingUp,
    title: "Data-Driven Growth",
    desc: "Evidence-based policy implementation through high-fidelity field data.",
  },
  {
    Icon: SquareCheck,
    title: "Aligned Implementation",
    desc: "Streamlined workflows for State and Central government agricultural departments.",
  },
] as const;

const platformSuite = [
  {
    bar: "#2D8B3F",
    iconBg: "#EAF6EC",
    iconColor: "#2D8B3F",
    Icon: Smartphone,
    title: "Farmer App",
    features: [
      "Digital Land Records",
      "Market Price Tracking",
      "Direct Loan Applications",
    ],
    cta: "Download Specs",
  },
  {
    bar: "#F4A322",
    iconBg: "#FFF3DC",
    iconColor: "#F4A322",
    Icon: Users,
    title: "Agent App",
    features: [
      "Field Survey Digitization",
      "Offline Data Capture",
      "KYC & Onboarding",
    ],
    cta: "Download Specs",
  },
  {
    bar: "#1E6B2E",
    iconBg: "#EAF6EC",
    iconColor: "#1E6B2E",
    Icon: Monitor,
    title: "Admin Portal",
    features: [
      "Regional Dashboards",
      "Impact Analytics",
      "Grant Disbursement Tools",
    ],
    cta: "Request Access",
  },
] as const;

const rightPanelFeatures = [
  {
    Icon: Map,
    title: "GIS Records",
    desc: "Precise land mapping and geo-tagging.",
  },
  {
    Icon: Users,
    title: "SHG/FPC Management",
    desc: "Centralized control for farming collectives.",
  },
  {
    Icon: Landmark,
    title: "Bank-ready Docs",
    desc: "Automated financial and compliance reports.",
  },
  {
    Icon: Eye,
    title: "Traceability",
    desc: "Full supply chain transparency for buyers.",
  },
] as const;

const h1Lines = [
  { text: "Cultivating", color: "text-white" },
  { text: "Precision.", color: "text-white" },
  { text: "Empowering", color: "text-[#5AB56A]" },
  { text: "Farmers.", color: "text-[#5AB56A]" },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className="grid min-h-[420px] grid-cols-1 overflow-hidden lg:grid-cols-[55%_45%] lg:gap-0">
        <div className="relative min-h-[400px] overflow-hidden bg-[#0a1f0c] px-6 py-12 sm:px-12 sm:py-12 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: heroLeftGrid }}
            aria-hidden
          />
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: -10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-block rounded-full border border-[#F4A322]/30 bg-[#F4A322]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F4A322]"
            >
              OUR STORY
            </motion.span>

            <motion.div
              className="mb-6"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {h1Lines.map((line) => (
                <motion.span
                  key={line.text}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                  className={`block text-3xl font-black leading-[1.05] lg:text-[48px] ${line.color}`}
                >
                  {line.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mb-10 max-w-[340px] text-sm leading-[1.8] text-white/60"
            >
              We are building the digital backbone for India&apos;s agricultural
              institutions, bringing data-driven clarity to every acre and every
              livelihood.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex flex-col rounded-[10px] border border-white/10 bg-white/[0.06] px-5 py-3">
                <span className="text-[22px] font-black text-[#F4A322]">
                  2024
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">
                  FOUNDED
                </span>
              </div>
              <div className="flex flex-col rounded-[10px] border border-white/10 bg-white/[0.06] px-5 py-3">
                <span className="text-[22px] font-black text-[#F4A322]">
                  Assam
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">
                  HEADQUARTERS
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col justify-center overflow-hidden bg-[#EAF6EC] px-6 py-12 sm:px-10 lg:p-12 lg:px-10"
        >
          <Sprout
            className="pointer-events-none absolute -right-5 -top-5 h-[120px] w-[120px] text-[#2D8B3F] opacity-15"
            strokeWidth={1.25}
            aria-hidden
          />
          <p className="relative z-10 mb-8 text-base font-bold text-[#1E6B2E]">
            Digital Infrastructure for Organized Agriculture
          </p>
          <div className="relative z-10 space-y-5">
            {rightPanelFeatures.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-sm">
                  <Icon
                    className="text-[#2D8B3F]"
                    size={18}
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold text-[#1E6B2E]">
                    {title}
                  </p>
                  <p className="text-xs leading-[1.6] text-[#666]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — MISSION */}
      <section className="bg-white px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#2D8B3F]">
              OUR MISSION
            </p>
            <h2 className="mb-6 text-2xl font-extrabold leading-tight text-[#1E6B2E] lg:text-[32px]">
              Bridging the Gap Between Farmers and Institutions
            </h2>
            <p className="mb-8 text-[15px] leading-[1.8] text-[#555]">
              At Digi Krishi, we recognize that the primary challenge in modern
              agriculture isn&apos;t just the farming itself — it&apos;s the
              lack of organized, verified data that connects smallholder farmers
              to global markets and institutional credit.
            </p>
            <blockquote className="mt-8 border-l-[3px] border-[#F4A322] py-4 pl-6">
              <p className="text-lg font-bold italic leading-normal text-[#1E6B2E]">
                &quot;We don&apos;t just digitize agriculture. We organize
                it.&quot;
              </p>
              <footer className="mt-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#999]">
                — TECHNICAL GOVERNANCE BOARD
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {missionValues.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border-l-4 bg-[#F8F8F8] py-5 pl-6 pr-6 transition-all duration-200 hover:bg-white hover:shadow-md"
                style={{ borderLeftColor: card.border }}
              >
                <h3 className="mb-2 text-base font-bold text-[#1E6B2E]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#666]">
                  {card.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — POLICY */}
      <section className="bg-[#F8F8F8] px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-extrabold text-[#1E6B2E] lg:text-4xl">
              Supporting India&apos;s Agricultural Vision
            </h2>
            <div
              className="mx-auto mt-3 h-[3px] w-[60px] rounded-full bg-[#F4A322]"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative col-span-1 overflow-hidden rounded-2xl bg-[#1E6B2E] p-8"
            >
              <span
                className="pointer-events-none absolute bottom-[-10px] right-[-5px] whitespace-nowrap text-[48px] font-black text-white/[0.04]"
                aria-hidden
              >
                10,000 FPOs
              </span>
              <h3 className="relative z-10 mb-4 text-xl font-extrabold text-white">
                10,000 FPOs Scheme
              </h3>
              <p className="relative z-10 mb-8 text-[13px] leading-[1.7] text-white/65">
                Aligned with the Central Sector Scheme for formation and
                promotion of Farmer Producer Organizations.
              </p>
              <div className="relative z-10 flex flex-col gap-3">
                {["SFAC Support", "NABARD Refinance", "NCDC Integration"].map(
                  (t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5"
                      style={{ gap: 8 }}
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-white/60" />
                      <span className="text-sm font-semibold text-white">
                        {t}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </motion.article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
              {policySmallCards.map((c, i) => {
                const Icon = c.Icon;
                return (
                  <motion.article
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                    className="rounded-[14px] border border-[#E8E8E8] bg-white p-6 transition-shadow hover:border-[#2D8B3F]/30 hover:shadow-md"
                  >
                    <Icon
                      className="mb-4 text-[#2D8B3F]"
                      size={22}
                      strokeWidth={2}
                      aria-hidden
                    />
                    <h3 className="mb-2 text-[15px] font-bold text-[#1E6B2E]">
                      {c.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[#666]">
                      {c.desc}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PLATFORM SUITE */}
      <section className="bg-white px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#2D8B3F]">
                OUR TECHNOLOGY
              </p>
              <h2 className="text-3xl font-extrabold text-[#1E6B2E] lg:text-4xl">
                Institutional Suite
              </h2>
            </div>
            <p className="max-w-[360px] text-sm leading-[1.7] text-[#666] lg:justify-self-end">
              Our modular platform architecture scales from individual field
              surveys to statewide dashboard management.
            </p>
          </div>
          <div className="mb-12 mt-8 border-t border-[#E8E8E8]" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {platformSuite.map((card, i) => {
              const Icon = card.Icon;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-[5px]" style={{ background: card.bar }} />
                  <div className="p-7">
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
                    <h3 className="mb-5 text-lg font-extrabold text-[#1E6B2E]">
                      {card.title}
                    </h3>
                    <ul className="mb-8 space-y-3">
                      {card.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <CheckCircle
                            className="shrink-0 text-[#2D8B3F]"
                            size={15}
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span className="text-[13px] font-medium text-[#555]">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="w-full cursor-pointer rounded-[10px] border border-[#E8E8E8] py-3 text-center text-[13px] font-semibold text-[#666] transition-all duration-200 hover:border-[#2D8B3F] hover:bg-[#EAF6EC] hover:text-[#2D8B3F]"
                    >
                      {card.cta}
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PARTNER / CONTACT */}
      <section className="bg-[#F8F8F8] px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 lg:grid-cols-[55fr_45fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-5 text-3xl font-extrabold text-[#1E6B2E] lg:text-4xl">
              Partner with Digi Krishi
            </h2>
            <p className="mb-8 max-w-[420px] text-[15px] leading-[1.8] text-[#555]">
              We are actively looking to collaborate with FPOs, Financial
              Institutions, and Government bodies to expand the digital
              agriculture ecosystem.
            </p>
            <div className="mb-12 flex flex-wrap gap-3">
              {[
                "NABARD ACCREDITED",
                "ISO 27001 COMPLIANT",
                "STARTUP INDIA RECOGNIZED",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#E8E8E8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#555]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-[#2D8B3F] px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-[#1E6B2E]"
            >
              Contact Us →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[20px] border border-[#E8E8E8] bg-white p-8 shadow-sm"
          >
            <div className="mb-8 flex items-center gap-3">
              <CalendarDays
                className="text-[#2D8B3F]"
                size={18}
                strokeWidth={2}
                aria-hidden
              />
              <span className="text-base font-bold text-[#1E6B2E]">
                Our Office
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#999]">
                  ADDRESS
                </span>
                <p className="text-[13px] font-medium leading-[1.6] text-[#333]">
                  Technopark Guwahati, North Guwahati, Kamrup, Assam — 781039,
                  India
                </p>
              </div>
              <div>
                <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#999]">
                  EMAIL
                </span>
                <a
                  href="mailto:partnerships@digikrishi.com"
                  className="text-[13px] font-medium text-[#2D8B3F] hover:underline"
                >
                  partnerships@digikrishi.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#999]">
                    REGISTRATION
                  </span>
                  <p
                    className="text-[13px] font-medium leading-[1.6] text-[#555]"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    U01063AS2024PTC01234
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6EC]">
                  <Hash
                    className="text-[#2D8B3F]"
                    size={16}
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
