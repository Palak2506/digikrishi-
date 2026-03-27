"use client";

import { motion, type Variants } from "framer-motion";
import { ClipboardList, Landmark, ShoppingBag, Users } from "lucide-react";
import { stakeholderSectionIntro } from "@/content/stakeholders";

const cards = [
  {
    icon: Users,
    title: "Farmers",
    description:
      "Access digital records, crop history, and market-linked services in one place—so decisions are informed and outcomes are traceable.",
  },
  {
    icon: ClipboardList,
    title: "Field Agents and FPC Teams",
    description:
      "Register farmers, capture field data, and coordinate FPC operations with structured workflows built for last-mile teams.",
  },
  {
    icon: Landmark,
    title: "Financial Institutions",
    description:
      "Access structured documentation, risk signals, and group-level visibility to lend and support agriculture with confidence.",
  },
  {
    icon: ShoppingBag,
    title: "Buyers and Agri Enterprises",
    description:
      "Engage with organized networks, source with transparency, and align procurement to real production and quality data.",
  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StakeholderCards() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-primary">
            WHO WE SERVE
          </p>
          <h2 className="mt-2 text-[36px] font-bold text-[#1E6B2E]">
            Supporting Organized Farmer Ecosystems
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#666666]">
            {stakeholderSectionIntro}
          </p>
        </div>

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px" }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.li key={card.title} variants={cardVariants}>
                <article className="h-full rounded-xl border border-neutral-border bg-white p-6 transition-all duration-200 hover:border-primary hover:shadow-lg">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-tint"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6 text-[#2D8B3F]" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1E6B2E]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                    {card.description}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
