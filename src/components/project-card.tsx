import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/schema";

import { ArrowUpRight } from "./icons";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  if (!project.cover || !project.liveUrl) {
    return null;
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ff5f56]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ffbd2e]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-muted">
          project_{String(index).padStart(2, "0")}.sh
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
          [{String(index).padStart(2, "0")}] {project.type} · {project.year}
        </p>

        <h3 className="mt-3 font-mono text-xl font-bold leading-none tracking-[-0.02em] text-accent sm:text-2xl">
          <Link
            href={`/karya/${project.slug}`}
            className="transition-colors hover:text-ink"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <p className="mt-3 font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
          {project.stack.map((item) => `[${item}]`).join(" ")}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka situs ${project.title} di tab baru`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            ./open
            <ArrowUpRight className="size-3.5" />
          </a>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buka kode ${project.title} di GitHub`}
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
            >
              ./code
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}