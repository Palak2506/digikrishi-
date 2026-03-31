"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  BarChart,
  BarChart2,
  Calendar,
  FileText,
  Landmark,
  Map,
  Network,
  Shield,
  User,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

const heroTextItems = [
  "DIGITAL CREDIT REVOLUTION",
  "Precision",
  "Lending.",
  "Verified Growth.",
] as const;

const infoCards = [
  {
    icon: UserCheck,
    title: "Farmer Identity",
    desc: "Multi-factor authentication including Aadhaar integration and facial verification for absolute KYC certainty.",
  },
  {
    icon: Map,
    title: "Land Docs",
    desc: "Digitized land titles and geo-fenced plot mapping to verify collateral and cultivation area.",
  },
  {
    icon: Calendar,
    title: "Crop Planning",
    desc: "Detailed seasonal planning data including seed varieties, input requirements, and projected timelines.",
  },
  {
    icon: Users,
    title: "Group Governance",
    desc: "Traceability of SHG/FPO dynamics, meeting records, and collective responsibility structures.",
  },
  {
    icon: Activity,
    title: "Production Monitoring",
    desc: "Satellite-based crop health monitoring and on-ground verification through digital field logs.",
  },
  {
    icon: FileText,
    title: "Transaction Records",
    desc: "Historical sales data, input purchases, and repayment behavior captured in a tamper-proof ledger.",
  },
] as const;

const flowBoxes = [
  { icon: User, title: "Farmer", subtitle: "DATA ENTRY & IOT" },
  { icon: Network, title: "SHG", subtitle: "SELF HELP GROUPS" },
  { icon: BarChart, title: "FPO", subtitle: "FARMER ORGANIZATIONS" },
  { icon: Landmark, title: "Banks/Market", subtitle: "FINANCIAL INSTITUTIONS" },
] as const;

export default function ForBanksPage() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true });
  const [zeroPercent, setZeroPercent] = useState(0);
  const [speedX, setSpeedX] = useState(1);

  useEffect(() => {
    if (!statsInView) return;

    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      setZeroPercent((v) => (v >= 0 ? 0 : v + 1));
      setSpeedX((v) => (v >= 10 ? 10 : v + 1));
      if (frame > 10) clearInterval(timer);
    }, 70);

    return () => clearInterval(timer);
  }, [statsInView]);

  return (
    <div className="bg-white">
      <motion.section
        className="bg-white px-8 py-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex rounded-full bg-[#EAF6EC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2D8B3F]"
            >
              {heroTextItems[0]}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[40px] font-extrabold leading-[1.1] text-[#1E6B2E] lg:text-[52px]"
            >
              {heroTextItems[1]}
              <br />
              {heroTextItems[2]}
              <br />
              {heroTextItems[3]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 max-w-sm text-sm leading-[1.7] text-[#666666]"
            >
              Empower your institution with end-to-end transparency. We bridge the
              gap between financial capital and rural potential through verified
              digital credit footprints and real-time asset monitoring.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-lg bg-[#1E6B2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2D8B3F]"
              >
                Request Documentation Overview
              </Link>
            </motion.div>
          </div>

          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-md">
            {[
              {
                icon: Shield,
                title: "Verified Identity",
                subtitle: "Biometric & Land-linked KYC",
              },
              {
                icon: BarChart2,
                title: "Credit Scoring",
                subtitle: "AI-driven production estimates",
              },
              {
                icon: Zap,
                title: "Instant Disbursement",
                subtitle: "Direct transfer to Farmer accounts",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF6EC]">
                      <Icon className="h-5 w-5 text-[#2D8B3F]" aria-hidden />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1E6B2E]">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#666666]">{item.subtitle}</div>
                    </div>
                  </div>
                  {idx < 2 ? (
                    <div className="my-3 text-center text-lg text-[#E8E8E8]">↓</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#F8F8F8] px-8 py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[#1E6B2E]">
            Key Information Required
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-[#666666]">
            Our rigorous data aggregation ensures banks have every data point
            necessary for compliant and secure lending decisions.
          </p>
          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="rounded-xl border border-[#E8E8E8] bg-white p-6 transition-all duration-200 hover:border-[#2D8B3F] hover:shadow-md"
                >
                  <Icon className="mb-4 h-7 w-7 text-[#2D8B3F]" aria-hidden />
                  <h3 className="mb-2 text-base font-bold text-[#1E6B2E]">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-[1.6] text-[#666666]">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-white px-8 py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[#1E6B2E]">
            Digital Traceability Ecosystem
          </h2>
          <p className="mt-3 text-center text-sm text-[#666666]">
            Seamless data flow from the soil to the balance sheet.
          </p>

          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {flowBoxes.map((box, idx) => {
              const Icon = box.icon;
              return (
                <div key={box.title} className="flex items-center">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -25 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="w-40 shrink-0 rounded-xl bg-[#1E6B2E] p-6 text-center text-white"
                  >
                    <Icon className="mx-auto mb-3 h-6 w-6 text-white" aria-hidden />
                    <div className="text-sm font-bold uppercase tracking-wider">
                      {box.title}
                    </div>
                    <div className="mt-1 text-xs uppercase text-white/60">
                      {box.subtitle}
                    </div>
                  </motion.div>
                  {idx < flowBoxes.length - 1 ? (
                    <div className="mx-4 text-2xl font-bold text-[#F4A322]">→</div>
                  ) : null}
                </div>
              );
            })}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-[#1E6B2E] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#2D8B3F]"
            >
              Request Documentation Overview
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={statsRef}
        className="px-8 py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[55%_45%]">
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              height: "320px",
            }}
          >
            <img
              src="/farm2.jpg"
              alt="Farm monitoring"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "22px",
                  marginBottom: "8px",
                }}
              >
                Real-time Asset Monitoring
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                Track the physical collateral through satellite imagery and
                regular digital geo-tagged farm visits.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-[#1E6B2E] p-6 text-white">
              <div className="text-[48px] font-extrabold text-white">{zeroPercent}%</div>
              <div className="mt-1 text-sm font-semibold">Data Tampering</div>
              <p className="mt-2 text-xs leading-[1.6] text-white/70">
                Our blockchain-inspired ledger ensures every transaction and
                record is immutable and auditable.
              </p>
            </div>
            <div className="rounded-2xl bg-[#8B5E0A] p-6 text-white">
              <div className="text-[48px] font-extrabold text-white">{speedX}x</div>
              <div className="mt-1 text-sm font-semibold">Faster Processing</div>
              <p className="mt-2 text-xs leading-[1.6] text-white/70">
                Reduce loan turnaround time from weeks to hours with pre-verified
                farmer portfolios.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

