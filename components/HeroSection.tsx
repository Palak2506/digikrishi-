"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const farmImages = [
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80",
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80",
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const servicePills = [
  { label: "Farmer Registration", href: "/how-it-works" },
  { label: "Crop Planning", href: "/how-it-works" },
  { label: "SHG Formation", href: "/how-it-works" },
  { label: "Field Monitoring", href: "/how-it-works" },
  { label: "Market Linkage", href: "/how-it-works" },
  { label: "For Banks", href: "/for-banks" },
  { label: "Traceability", href: "/technology" },
] as const;

const bottomTabs = [
  { label: "What We Do", href: "#what-we-do", active: true },
  { label: "Our Stakeholders", href: "#our-stakeholders", active: false },
  { label: "For Banks", href: "#for-banks", active: false },
  { label: "Partner With Us", href: "#partner", active: false },
] as const;

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const interval = setInterval(() => {
      if (timeoutId) clearTimeout(timeoutId);
      setFading(true);
      timeoutId = setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % farmImages.length);
        setNextImage((prev) => (prev + 1) % farmImages.length);
        setFading(false);
        timeoutId = null;
      }, 800);
    }, 5000);
    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${farmImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
        aria-hidden
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundImage: `url(${farmImages[nextImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(135deg, rgba(10,46,15,0.88) 0%, rgba(26,74,31,0.82) 50%, rgba(13,59,18,0.75) 100%)",
        }}
        aria-hidden
      />

      <div
        style={{ position: "relative", zIndex: 2, width: "100%" }}
        className="flex min-h-screen w-full flex-col"
      >
        <div className="relative z-10 flex flex-1 flex-col justify-center pb-28 pl-6 pr-6 pt-10 md:pl-20 md:pr-12">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 text-[14px] font-normal text-white/70"
          >
            Building Technologies for Digital Agriculture
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{
              duration: 0.5,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-[40px] font-extrabold leading-[1.1] text-white md:text-[72px]"
          >
            Farmers To Market
          </motion.h1>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.5,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex max-w-4xl flex-wrap"
          >
            {servicePills.map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                className="mb-2 mr-2 inline-flex rounded-[6px] bg-[#2D8B3F] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#1E6B2E]"
              >
                {pill.label}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Floating notification cards — desktop only */}
        <div
          className="pointer-events-none absolute inset-0 z-[5] hidden md:block"
          aria-hidden
        >
          <div className="absolute right-[8%] top-[20%] w-56 rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-lg backdrop-blur-md">
            <div className="text-xs font-semibold text-[#2D8B3F]">SHG Update</div>
            <p className="mt-1 text-sm text-white">
              Group savings recorded · 24 members active
            </p>
          </div>
          <div className="absolute right-[5%] top-[45%] w-64 rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-lg backdrop-blur-md">
            <div className="text-xs font-semibold text-[#2D8B3F]">
              FPO Dashboard
            </div>
            <p className="mt-1 text-xs text-white/80">
              Total Registered Farmers: 1,240
            </p>
            <p className="mt-1 text-xs text-white/80">Crop Plans Active: 86</p>
            <p className="mt-1 text-xs text-white/80">Market Orders: 12</p>
          </div>
          <div className="absolute right-[10%] top-[68%] w-52 rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-lg backdrop-blur-md">
            <div className="text-xs font-semibold text-[#2D8B3F]">Field Agent</div>
            <p className="mt-1 text-sm text-white">
              Soil testing booked · Plot #A24
            </p>
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/50 backdrop-blur-md">
          <nav
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-4 md:gap-0"
            aria-label="Page sections"
          >
            {bottomTabs.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className={
                  tab.active
                    ? "cursor-pointer rounded-md bg-[#F4A322] px-8 py-4 font-semibold text-[#1E6B2E]"
                    : "cursor-pointer px-8 py-4 text-white/70 transition-colors hover:text-white"
                }
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 3,
        }}
      >
        {farmImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === currentImage || undefined}
            onClick={() => {
              setCurrentImage(i);
              setNextImage((i + 1) % farmImages.length);
              setFading(false);
            }}
            style={{
              width: i === currentImage ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                i === currentImage ? "#F4A322" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
