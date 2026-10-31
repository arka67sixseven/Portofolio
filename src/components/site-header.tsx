import Link from "next/link";

import { profile } from "@/content/profile";

import { ArrowUpRight } from "./icons";
import { Wordmark } from "./wordmark";

const navItems = [
  { href: "/#karya", label: "karya" },
  { href: "/#tentang", label: "tentang" },
  { href: "/#kontak", label: "kontak" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1160px] items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="hidden font-mono text-xs text-muted sm:inline">
            rafif@portfolio:~
          </span>
          <Wordmark />
        </div>

        <nav
          aria-label="Navigasi utama"
          className="flex items-center gap-3 font-mono text-[0.72rem] text-muted sm:gap-5 sm:text-[0.82rem]"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[28px] items-center py-2 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 transition-colors hover:text-accent sm:inline-flex"
          >
            github
            <ArrowUpRight className="size-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}