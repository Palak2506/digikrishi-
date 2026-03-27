import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { FloatingPartnerButton } from "@/components/FloatingPartnerButton";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digi Krishi — Digital Infrastructure for Organized Agriculture",
  description:
    "A unified digital platform for farmers, cooperatives, and agribusiness—connecting data, markets, and services across the agricultural value chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <FloatingPartnerButton />
        <ConditionalFooter />
      </body>
    </html>
  );
}
