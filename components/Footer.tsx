import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#1E6B2E] px-8 py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <div className="text-[20px] font-bold text-white">Digi Krishi</div>
          <p className="mt-2 text-sm text-white/70">
            Digital Infrastructure for Organized Agriculture.
          </p>
          <p className="mt-4 text-xs text-white/50">
            Aligned with the Government of India&apos;s 10,000 FPO Scheme
          </p>
        </div>

        <div>
          <div className="mb-4 font-semibold text-white">Quick Links</div>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/how-it-works", label: "How It Works" },
            { href: "/for-banks", label: "For Banks" },
            { href: "/technology", label: "Technology" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="mb-2 block text-sm text-white/70 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div>
          <div className="mb-4 font-semibold text-white">Contact</div>
          <div className="mb-3 flex gap-3">
            <Mail
              className="h-[18px] w-[18px] shrink-0 text-white/70"
              aria-hidden
            />
            <a
              href="mailto:info@digikrishi.in"
              className="break-words text-sm text-white/70 transition-colors hover:text-accent"
            >
              info@digikrishi.in
            </a>
          </div>
          <div className="mb-3 flex gap-3">
            <Phone
              className="h-[18px] w-[18px] shrink-0 text-white/70"
              aria-hidden
            />
            <span className="text-sm text-white/70">+91 XXXXX</span>
          </div>
          <div className="mb-3 flex gap-3">
            <MapPin
              className="h-[18px] w-[18px] shrink-0 text-white/70"
              aria-hidden
            />
            <span className="break-words text-sm text-white/70">
              11, Sadabor Avenue, Neelam Path, Narikalbari, Guwahati, Assam 781024
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6">
        <p className="text-center text-xs text-white/50">
          © 2026 Digi Krishi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
