"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  FileCheck,
  MapPin,
  Package,
  Sprout,
  UserCheck,
  Users,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const heroBg =
  "linear-gradient(180deg, #0a2e0f 0%, #1a4a1f 60%, #1E6B2E 100%)";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden py-20 text-center">
        <img
          src="/farm1.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.12,
            zIndex: 0,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: heroBg, zIndex: 1 }}
          aria-hidden
        />
        <div className="relative z-[2] mx-auto max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0 }}
            className="mb-4 block text-xs font-bold uppercase tracking-[0.15em] text-[#F4A322]"
          >
            THE PROCESS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-6 text-[32px] font-black leading-[1.1] text-white md:text-[56px]"
          >
            From Registration to Market
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mx-auto mb-10 max-w-xl text-lg text-white/70"
          >
            A structured 7-step digital journey that connects farmers to
            institutions and markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex justify-center gap-3"
          >
            <span className="h-3 w-8 rounded-full bg-[#F4A322]" />
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-white/30" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="flex w-full min-h-[360px] flex-col md:min-h-[480px] md:flex-row md:gap-0">
        <motion.div
          className="relative w-full overflow-hidden bg-[#1E6B2E] p-10 md:w-1/2 md:p-16"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="pointer-events-none absolute right-6 top-[-20px] select-none font-black leading-none text-white/[0.06]"
            style={{ fontSize: 160 }}
            aria-hidden
          >
            01
          </span>
          <span className="mb-8 inline-block rounded-full bg-[#F4A322] px-3 py-1 text-[11px] font-bold text-[#1E6B2E]">
            STEP 01
          </span>
          <h2 className="mb-5 text-3xl font-extrabold leading-[1.2] text-white md:text-4xl">
            Farmer Registration
          </h2>
          <p className="mb-8 max-w-sm text-[15px] leading-[1.8] text-white/80">
            Farmers are digitally enrolled with KYC documentation,
            Aadhaar-linked identity verification, and profile creation.
          </p>
          <div className="flex flex-wrap gap-2">
            {["KYC Upload", "Aadhaar Linked", "Digital Profile"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/12 px-3 py-1.5 text-xs text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
          <UserCheck
            className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 text-white/[0.12]"
            strokeWidth={1.25}
            aria-hidden
          />
        </motion.div>

        <motion.div
          className="relative w-full overflow-hidden bg-[#EAF6EC] p-10 md:w-1/2 md:p-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="pointer-events-none absolute right-6 top-[-20px] select-none font-black leading-none text-[#2D8B3F]/[0.08]"
            style={{ fontSize: 160 }}
            aria-hidden
          >
            02
          </span>
          <span className="mb-8 inline-block rounded-full border border-[#2D8B3F] bg-white px-3 py-1 text-[11px] font-bold text-[#2D8B3F]">
            STEP 02
          </span>
          <h2 className="mb-5 text-3xl font-extrabold leading-[1.2] text-[#1E6B2E] md:text-4xl">
            Land Mapping
          </h2>
          <p className="mb-8 max-w-sm text-[15px] leading-[1.8] text-[#666666]">
            Land parcels are geo-tagged with precise GIS boundaries. Each plot
            is recorded under the farmer&apos;s My Farms profile.
          </p>
          <div className="flex flex-wrap gap-2">
            {["GIS Tagging", "Plot Boundaries", "My Farms"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#E8E8E8] bg-white px-3 py-1.5 text-xs font-medium text-[#2D8B3F]"
              >
                {t}
              </span>
            ))}
          </div>
          <MapPin
            className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 text-[#2D8B3F]/[0.12]"
            strokeWidth={1.25}
            aria-hidden
          />
        </motion.div>
      </section>

      <section className="bg-[#F8F8F8] px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2D8B3F]">
            CORE OPERATIONS
          </p>
          <h2 className="mb-14 text-3xl font-extrabold text-[#1E6B2E] md:text-4xl">
            The Agricultural Cycle
          </h2>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {[
              {
                step: "03",
                icon: Users,
                iconBg: "#1E6B2E",
                title: "SHG Formation",
                desc: "Farmers join Self Help Groups. Governance records, meeting minutes, and savings data are digitally maintained.",
                tags: ["Group Savings", "Governance Records", "Local Network"],
                thumbSrc: "/millet%20(1).jpeg",
              },
              {
                step: "04",
                icon: Sprout,
                iconBg: "#2D8B3F",
                title: "Crop Planning",
                desc: "Seasonal crop plans are created with variety selection, acreage mapping, input requirements, and projected harvest timelines.",
                tags: ["Variety Selection", "Acreage", "Input Planning"],
                thumbSrc: "/millet%20(2).jpeg",
              },
              {
                step: "05",
                icon: Eye,
                iconBg: "#5AB56A",
                title: "Field Monitoring",
                desc: "Field agents document crop conditions, update growth stages, and provide stage-wise cultivation guidance.",
                tags: ["Growth Stages", "Field Logs", "Advisory"],
                thumbSrc: "/millet%20(3).jpeg",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.step}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  }}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 ease-out"
                >
                  <span
                    className="pointer-events-none absolute right-5 top-3 font-black leading-none text-[#2D8B3F]/[0.06]"
                    style={{ fontSize: 80 }}
                    aria-hidden
                  >
                    {card.step}
                  </span>
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <p className="mb-3 text-[11px] font-bold tracking-[0.1em] text-[#F4A322]">
                    STEP {card.step}
                  </p>
                  <h3 className="mb-4 text-[22px] font-bold text-[#1E6B2E]">
                    {card.title}
                  </h3>
                  <p className="mb-8 text-sm leading-[1.75] text-[#666666]">
                    {card.desc}
                  </p>
                  <div className="relative mt-auto flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#EAF6EC] px-3 py-1.5 text-[11px] font-medium text-[#2D8B3F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-6 overflow-hidden"
                    style={{ height: "100px", borderRadius: "8px" }}
                  >
                    <img
                      src={card.thumbSrc}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="flex w-full min-h-[360px] flex-col md:min-h-[480px] md:flex-row md:gap-0">
        <motion.div
          className="relative w-full overflow-hidden bg-[#F4A322] p-10 md:w-1/2 md:p-16"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="pointer-events-none absolute right-6 top-[-20px] select-none font-black leading-none text-white/15"
            style={{ fontSize: 160 }}
            aria-hidden
          >
            06
          </span>
          <span className="mb-8 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#8B6000]">
            STEP 06
          </span>
          <h2 className="mb-5 text-3xl font-extrabold text-white md:text-4xl">
            Aggregation &amp; Market
          </h2>
          <p className="mb-8 max-w-sm text-[15px] leading-[1.8] text-white/90">
            Produce is aggregated through FPO networks and connected to
            institutional buyers and processors.
          </p>
          <div className="flex flex-wrap gap-2">
            {["FPO Network", "Direct Buying", "Supply Chain"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/20 px-3 py-1.5 text-xs text-white"
              >
                {t}
              </span>
            ))}
          </div>
          <Package
            className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 text-white/15"
            strokeWidth={1.25}
            aria-hidden
          />
        </motion.div>

        <motion.div
          className="relative w-full overflow-hidden bg-[#1E6B2E] p-10 md:w-1/2 md:p-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="pointer-events-none absolute right-6 top-[-20px] select-none font-black leading-none text-white/[0.06]"
            style={{ fontSize: 160 }}
            aria-hidden
          >
            07
          </span>
          <span className="mb-8 inline-block rounded-full bg-[#F4A322] px-3 py-1 text-[11px] font-bold text-[#1E6B2E]">
            STEP 07
          </span>
          <h2 className="mb-5 text-3xl font-extrabold text-white md:text-4xl">
            Transaction Documentation
          </h2>
          <p className="mb-8 max-w-sm text-[15px] leading-[1.8] text-white/80">
            All aggregation activities and market transactions are recorded in
            a tamper-proof digital ledger.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Digital Ledger", "Instant Records", "Audit Trail"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/12 px-3 py-1.5 text-xs text-white/85"
              >
                {t}
              </span>
            ))}
          </div>
          <FileCheck
            className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 text-white/[0.12]"
            strokeWidth={1.25}
            aria-hidden
          />
        </motion.div>
      </section>

      <motion.section
        className="bg-[#2D8B3F] px-8 py-24 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-[28px] font-extrabold leading-[1.2] text-white md:text-[44px]">
          Ready to digitize your farmer network?
        </h2>
        <p className="mb-10 text-base text-white/75">
          Empower your agricultural community with precision data and global
          market access.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-[#1E6B2E] px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-[#0d3b12]"
          >
            Get Started
          </Link>
          <Link
            href="/technology"
            className="rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Technology
          </Link>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
