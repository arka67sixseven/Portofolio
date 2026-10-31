import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
      {`// ${children}`}
    </p>
  );
}