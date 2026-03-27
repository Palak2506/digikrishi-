"use client";

import { motion, type Variants } from "framer-motion";
import { howItWorksSteps } from "@/content/how-it-works";

const lineColor = "#E8E8E8";

function StepCard({
  stepIndex,
  title,
  description,
}: {
  stepIndex: number;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-border bg-white p-6 shadow-sm">
      <span className="inline-block rounded bg-primary-tint px-2 py-0.5 text-xs font-semibold text-primary">
        Step {stepIndex + 1}
      </span>
      <h3 className="mt-3 text-lg font-bold text-[#1E6B2E]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#666666]">{description}</p>
    </div>
  );
}

const cardTransition = (index: number) => ({
  duration: 0.5,
  delay: index * 0.15,
  ease: [0.22, 1, 0.36, 1] as const,
});

export function HowItWorksTimeline() {
  const steps = howItWorksSteps;

  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.35 },
    }),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Mobile: single column, vertical line on the left */}
      <div className="relative md:hidden">
        <div
          className="absolute bottom-0 left-[1.125rem] top-0 w-[2px] -translate-x-1/2"
          style={{ backgroundColor: lineColor }}
          aria-hidden
        />
        <ul className="space-y-12">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pl-12 text-left">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-48px" }}
                variants={nodeVariants}
                className="absolute left-[1.125rem] top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
              >
                {i + 1}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-64px" }}
                transition={cardTransition(i)}
              >
                <StepCard stepIndex={i} title={step.title} description={step.description} />
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: center line, cards alternate left / right */}
      <div className="relative hidden pb-4 md:block">
        <div
          className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2"
          style={{ backgroundColor: lineColor }}
          aria-hidden
        />
        <ul>
          {steps.map((step, i) => {
            const cardOnLeft = i % 2 === 0;
            return (
              <li
                key={step.title}
                className="relative grid min-h-[140px] grid-cols-2 gap-x-8 py-10"
              >
                <div className="flex justify-end pr-6">
                  {cardOnLeft ? (
                    <motion.div
                      className="w-full max-w-md"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-64px" }}
                      transition={cardTransition(i)}
                    >
                      <StepCard
                        stepIndex={i}
                        title={step.title}
                        description={step.description}
                      />
                    </motion.div>
                  ) : null}
                </div>

                <div className="flex justify-start pl-6">
                  {!cardOnLeft ? (
                    <motion.div
                      className="w-full max-w-md"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-64px" }}
                      transition={cardTransition(i)}
                    >
                      <StepCard
                        stepIndex={i}
                        title={step.title}
                        description={step.description}
                      />
                    </motion.div>
                  ) : null}
                </div>

                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-64px" }}
                  variants={nodeVariants}
                  className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                >
                  {i + 1}
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
