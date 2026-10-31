import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";

import { ContactSection } from "@/components/contact-section";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Rafif Arkana Putra — Web Developer Yogyakarta";
const description =
  "Portofolio Rafif Arkana Putra, siswa RPL di Yogyakarta. Tiga proyek live: landing page, website sekolah, dan eksperimen produk.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Rafif Arkana Putra",
  },
  description,
  applicationName: "Rafif Arkana Putra",
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Rafif Arkana Putra",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={mono.variable}
    >
      <body className="min-h-svh bg-bg font-mono text-ink antialiased">
        <div aria-hidden="true" className="scanlines pointer-events-none fixed inset-0 z-50" />

        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
        >
          Lewati ke konten
        </a>

        <SiteHeader />

        <main id="konten" className="crt-glow relative">
          {children}
        </main>

        <ContactSection />
      </body>
    </html>
  );
}