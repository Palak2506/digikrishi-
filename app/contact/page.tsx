"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  CheckCircle2,
  Globe,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";

const heroMesh =
  "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.04) 60px, rgba(255,255,255,0.04) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.04) 60px, rgba(255,255,255,0.04) 61px), linear-gradient(to bottom right, #1a4a1f 0%, #2D8B3F 30%, #4a7c2f 50%, #8B9a2f 70%, #c4a832 100%)";

const topoBg =
  "repeating-radial-gradient(circle at 30% 50%, transparent 0px, transparent 40px, rgba(180,170,150,0.4) 40px, rgba(180,170,150,0.4) 41px), repeating-radial-gradient(circle at 70% 40%, transparent 0px, transparent 55px, rgba(160,150,130,0.3) 55px, rgba(160,150,130,0.3) 56px)";

const partnerTypes = ["FPO", "Bank", "Buyer", "Field Agent"] as const;
const roles = [
  "Strategic Planner",
  "FPO Manager",
  "Bank Officer",
  "Field Agent",
  "Buyer",
  "Other",
] as const;

export default function ContactPage() {
  const [activeType, setActiveType] = useState<(typeof partnerTypes)[number]>("FPO");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      role: String(formData.get("role") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSuccess(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white">
      <section className="h-[320px] w-full" style={{ background: heroMesh }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-full items-end p-6 pb-10 md:p-12 md:pb-16"
        >
          <h1 className="max-w-lg text-[28px] font-extrabold leading-[1.1] text-white md:text-[48px]">
            Building the Future of
            <br />
            Precision Agriculture.
          </h1>
        </motion.div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[52%_48%]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#2D8B3F]">
              CONNECT WITH EXCELLENCE
            </p>
            <h2 className="mb-4 text-[40px] font-extrabold text-[#1E6B2E]">
              Get in Touch
            </h2>
            <p className="mb-8 max-w-sm text-sm leading-[1.7] text-[#666666]">
              Whether you&apos;re a financial institution looking to digitize credit
              or a farming collective aiming for higher yields, our team is ready
              to map your growth journey.
            </p>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#333333]">
              SELECT YOUR PARTNER TYPE
            </p>
            <div className="flex flex-wrap gap-3">
              {partnerTypes.map((type) => (
                <motion.button
                  key={type}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setActiveType(type)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeType === type
                      ? "bg-[#2D8B3F] text-white"
                      : "border border-[#2D8B3F] bg-white text-[#2D8B3F] hover:bg-[#EAF6EC]"
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  icon: MapPin,
                  title: "Regional Headquarters",
                  line1: "11, Sadabor Avenue, Neelam Path",
                  line2: "Narikalbari, Guwahati, Assam 781024",
                },
                {
                  icon: Mail,
                  title: "Strategic Inquiries",
                  line1: "info@digikrishi.in",
                  line2: "support@digikrishi.in",
                },
                {
                  icon: Phone,
                  title: "Direct Support",
                  line1: "+91 (800) DIGI-AGRI",
                  line2: "Mon-Fri, 9am-6pm IST",
                },
                {
                  icon: BarChart2,
                  title: "Digital Dashboard",
                  line1: "Access the precision portal",
                  line2: "24/7 Monitoring System",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#EAF6EC] p-2">
                      <Icon className="h-4 w-4 text-[#2D8B3F]" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1E6B2E]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#666666]">{item.line1}</p>
                      <p className="text-xs text-[#666666]">{item.line2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-lg"
          >
            {success ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-[#2D8B3F]" aria-hidden />
                <p className="mt-4 font-semibold text-[#1E6B2E]">
                  Thank you! We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="mb-5">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#333333]">
                    FULL NAME
                  </label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border border-[#E8E8E8] bg-[#F8F8F8] px-4 py-3 text-sm text-[#333333] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]"
                  />
                </div>

                <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#333333]">
                      ORGANIZATION
                    </label>
                    <input
                      name="organization"
                      placeholder="AgriCorp Int."
                      required
                      className="w-full rounded-lg border border-[#E8E8E8] bg-[#F8F8F8] px-4 py-3 text-sm text-[#333333] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#333333]">
                      ROLE
                    </label>
                    <select
                      name="role"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-[#E8E8E8] bg-[#F8F8F8] px-4 py-3 text-sm text-[#333333] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]"
                    >
                      <option value="" disabled>
                        Select role
                      </option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#333333]">
                    WORK EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full rounded-lg border border-[#E8E8E8] bg-[#F8F8F8] px-4 py-3 text-sm text-[#333333] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]"
                  />
                </div>

                <div className="relative mb-5">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#333333]">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can we assist your agricultural goals?"
                    required
                    className="w-full resize-none rounded-lg border border-[#E8E8E8] bg-[#F8F8F8] px-4 py-3 text-sm text-[#333333] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]"
                  />
                  <div className="absolute bottom-4 right-4 rounded-lg bg-[#F4A322] p-2">
                    <Handshake className="h-4 w-4 text-white" aria-hidden />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#F4A322] py-4 text-base font-bold text-[#1E6B2E] transition hover:scale-[1.02] hover:bg-yellow-400"
                >
                  {loading ? "Sending..." : "Send Inquiry ➤"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="bg-[#F8F8F8] px-8 py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%]">
          <div
            className="h-72 w-full rounded-2xl"
            style={{
              backgroundColor: "#d4cfc6",
              backgroundImage: topoBg,
            }}
          />
          <div>
            <h2 className="mb-4 text-[32px] font-extrabold leading-[1.2] text-[#2D8B3F]">
              Local Roots, Global Precision.
            </h2>
            <p className="mb-6 text-sm leading-[1.7] text-[#666666]">
              Our field operations span over 12 states, providing localized data
              precision with a centralized technology core. We don&apos;t just
              provide data; we provide presence.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[#E8E8E8] bg-white px-4 py-2 text-sm font-medium text-[#333333]">
                <span className="text-[#2D8B3F]">●</span> 500+ Active FPOs
              </span>
              <span className="rounded-full border border-[#E8E8E8] bg-white px-4 py-2 text-sm font-medium text-[#333333]">
                <span className="text-[#2D8B3F]">●</span> 24 Banks Integrated
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="bg-[#1E6B2E] px-8 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Digi Krishi</h3>
            <p className="mb-6 max-w-xs text-xs leading-[1.7] text-white/60">
              Pioneering the next generation of data-driven agricultural finance
              and precision farming tools for a sustainable future.
            </p>
            <div className="flex gap-2">
              <button className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20">
                <Globe className="h-[14px] w-[14px] text-white" aria-hidden />
              </button>
              <button className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20">
                <Share2 className="h-[14px] w-[14px] text-white" aria-hidden />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-white/70 hover:text-white">
                Platform Overview
              </Link>
              <Link href="/" className="block text-white/70 hover:text-white">
                Success Stories
              </Link>
              <Link href="/partner" className="block font-medium text-[#F4A322]">
                Partner Portal
              </Link>
              <Link href="/" className="block text-white/70 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-white">Subscribe</h3>
            <p className="mb-4 text-xs text-white/60">
              Get the latest insights on precision agriculture.
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Email Address"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
              />
              <button className="rounded-lg bg-[#F4A322] px-4 py-2 text-sm font-semibold text-[#1E6B2E] transition hover:bg-yellow-400">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            © 2024 Digi Krishi. Cultivating Precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
