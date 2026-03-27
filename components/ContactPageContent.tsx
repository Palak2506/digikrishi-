"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

const partnerTypes = [
  "FPOs",
  "Financial Institutions",
  "Agri Buyers",
  "Dev Orgs",
  "Tech Partners",
] as const;

const roleOptions = [
  "FPO",
  "Bank",
  "Buyer",
  "Tech Partner",
  "Other",
] as const;

export function ContactPageContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      organization: String(fd.get("organization") ?? "").trim(),
      role: String(fd.get("role") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          typeof json?.error === "string"
            ? json.error
            : `${res.status} ${res.statusText}`,
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not reach the server. Check that the API is running.",
      );
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="lg:w-[60%]">
          <h1 className="text-4xl font-bold text-[#1E6B2E]">
            Contact & Partnership
          </h1>
          <p className="mt-4 text-[#333333] leading-relaxed">
            We partner with farmer producer organizations, banks, buyers,
            development organizations, and technology teams to build digital
            infrastructure for organized agriculture. Tell us how you work with
            farmers and value chains—we will map the right next conversation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {partnerTypes.map((label) => (
              <span
                key={label}
                className="inline-flex rounded-full bg-primary-tint px-4 py-2 text-sm font-semibold text-primary"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-3 flex gap-3">
              <Mail
                className="h-[18px] w-[18px] shrink-0 text-[#2D8B3F]"
                strokeWidth={2}
                aria-hidden
              />
              <a
                href="mailto:info@digikrishi.in"
                className="text-sm text-[#333333]"
              >
                info@digikrishi.in
              </a>
            </div>
            <div className="mb-3 flex gap-3">
              <Phone
                className="h-[18px] w-[18px] shrink-0 text-[#2D8B3F]"
                strokeWidth={2}
                aria-hidden
              />
              <span className="text-sm text-[#333333]">+91 XXXXX</span>
            </div>
            <div className="flex gap-3">
              <MapPin
                className="h-[18px] w-[18px] shrink-0 text-[#2D8B3F]"
                strokeWidth={2}
                aria-hidden
              />
              <span className="text-sm text-[#333333]">
                11, Sadabor Avenue, Neelam Path, Narikalbari, Guwahati, Assam
                781024
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%]">
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-neutral-border bg-white p-6 shadow-sm"
          >
            <fieldset disabled={status === "loading"} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-sm font-semibold text-neutral-text"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-neutral-border px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-org"
                  className="mb-1 block text-sm font-semibold text-neutral-text"
                >
                  Organization
                </label>
                <input
                  id="contact-org"
                  name="organization"
                  type="text"
                  required
                  autoComplete="organization"
                  className="w-full rounded-lg border border-neutral-border px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-role"
                  className="mb-1 block text-sm font-semibold text-neutral-text"
                >
                  Role
                </label>
                <select
                  id="contact-role"
                  name="role"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-neutral-border px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-sm font-semibold text-neutral-text"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-neutral-border px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-sm font-semibold text-neutral-text"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-neutral-border px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </fieldset>

            {status === "success" ? (
              <div
                className="mt-4 rounded-lg border border-primary bg-primary-tint px-4 py-3 text-sm font-medium text-primary"
                role="status"
              >
                Thank you! We&apos;ll be in touch shortly.
              </div>
            ) : null}

            {status === "error" && errorMessage ? (
              <div
                className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                role="alert"
              >
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark disabled:opacity-70"
            >
              {status === "loading" ? "Sending…" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
