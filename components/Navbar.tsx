"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20 4c-7.2.2-12.1 3.3-14.5 7.1C3.8 14.3 4 18 4 20c1.9-.1 5.7-.6 8.9-1.9C16.7 16.4 19.8 11.4 20 4Z"
        fill="#5AB56A"
      />
      <path
        d="M6.5 17.5c2.7-3.8 6.7-7.1 11.5-9.5"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

type NavItem = { href: string; label: string };

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How It Works" },
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
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-[20px] tracking-tight text-white"
        >
          <LeafIcon />
          <span>Digi Krishi</span>
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
                    "text-sm font-medium text-white transition-colors hover:text-accent",
                    active ? "text-accent" : "",
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
                        "py-3 text-base font-medium text-white transition-colors hover:text-accent",
                        active ? "text-accent" : "",
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
