import Link from "next/link";

import { profile } from "@/content/profile";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${profile.name} — beranda`}
      className={`group inline-flex items-baseline gap-1 font-mono text-[0.82rem] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-accent ${className}`}
    >
      <span className="text-muted">~/</span>
      <span>{profile.wordmark.replace(" ", "-")}</span>
      <span
        aria-hidden="true"
        className="mb-[0.08em] inline-block size-[0.42em] bg-accent transition-transform duration-150 group-hover:translate-x-0.5"
      />
    </Link>
  );
}