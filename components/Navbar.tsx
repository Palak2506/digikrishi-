"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/farmer-app", label: "Farmer App" },
      { href: "/for-banks", label: "For Banks" },
      { href: "/technology", label: "Technology" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#1E6B2E] text-white">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Main"
      >
        <Link href="/">
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src="/logo.png"
              alt="Digi Krishi"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                console.error("Logo failed to load");
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "-0.3px",
              }}
            >
              Digi Krishi
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "border-b-2 border-transparent pb-0.5 text-sm font-medium text-white transition-colors hover:text-accent",
                    active ? "border-[#F4A322] text-accent" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/partner"
            className="rounded-full bg-[#F4A322] px-5 py-2 text-sm font-semibold text-[#1E6B2E] transition-colors hover:bg-yellow-400"
          >
            Partner with Us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden"
          >
            <div className="border-t border-white/15 bg-[#1E6B2E] px-4 pb-4 sm:px-6">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "border-b-2 border-transparent py-3 text-base font-medium text-white transition-colors hover:text-accent",
                        active ? "w-fit border-[#F4A322] text-accent" : "",
                      ].join(" ")}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/partner"
                  className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-[#F4A322] px-5 py-2 text-sm font-semibold text-[#1E6B2E] transition-colors hover:bg-yellow-400"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner with Us
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
