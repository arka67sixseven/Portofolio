import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowUpRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { featuredProjects } from "@/content/projects";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/karya/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1160px] px-4 py-10 sm:px-8 sm:py-14">
      <Link
        href="/#karya"
        className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden="true">←</span>
        kembali ke karya
      </Link>

      <section className="mt-8 overflow-hidden rounded-lg border border-line bg-surface">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ff5f56]" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs text-muted">
            {project.slug}.md
          </span>
        </div>

        <div className="p-5 sm:p-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
            {"// studi kasus"}
          </p>
          <h1 className="mt-4 font-mono text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[0.95] tracking-[-0.03em] text-accent">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
          <p className="mt-5 max-w-[62ch] text-[0.98rem] leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              >
                ./open
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
              >
                ./code
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}
          </div>

          {project.cover ? (
            <div className="mt-8 overflow-hidden rounded-md border border-line">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                priority
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </div>
      </section>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <section className="border-t border-line pt-8">
            <SectionLabel>masalah</SectionLabel>
            <h2 className="mt-4 font-mono text-2xl font-bold text-ink">
              {project.problem}
            </h2>
          </section>

          <section className="mt-10 border-t border-line pt-8">
            <SectionLabel>yang dibangun</SectionLabel>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {project.build.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent">
                    -
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-line pt-8">
            <SectionLabel>teknis</SectionLabel>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {project.technical.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent">
                    -
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-line pt-8">
            <SectionLabel>hasil</SectionLabel>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {project.result.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent">
                    -
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
              {"// metadata"}
            </p>
            <dl className="mt-4 space-y-3">
              <div className="border-b border-line pb-3">
                <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  tipe
                </dt>
                <dd className="mt-1 text-sm text-ink">{project.type}</dd>
              </div>
              <div className="border-b border-line pb-3">
                <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  tahun
                </dt>
                <dd className="mt-1 text-sm text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-line px-2 py-1 font-mono text-[0.62rem] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {project.disclaimer ? (
              <p className="mt-6 border-l-2 border-accent pl-3 text-[0.72rem] leading-relaxed text-muted">
                {project.disclaimer}
              </p>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}