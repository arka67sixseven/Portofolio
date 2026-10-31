import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { ProfileCard } from "@/components/profile-card";
import { ProjectCard } from "@/components/project-card";
import { ProjectFeature } from "@/components/project-feature";
import { SectionLabel } from "@/components/section-label";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

const toolGroups = [
  ["bahasa", "HTML · CSS · JavaScript · TypeScript"],
  ["framework", "React · Next.js · Tailwind CSS"],
  ["tools", "Git · GitHub · Vercel · OpenCode"],
  ["fokus", profile.focus],
] as const;

export default function Home() {
  const [feature, ...rest] = featuredProjects;

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden"
      >
        <div className="relative mx-auto max-w-[1160px] px-4 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="font-mono text-[0.72rem] text-accent">
                <span className="text-muted">$</span> whoami
              </p>

              <h1
                id="hero-title"
                className="mt-3 font-mono text-[clamp(2.6rem,6vw,5.6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-ink"
              >
                rafif arkana putra
                <span className="cursor-blink" aria-hidden="true" />
              </h1>

              <p className="mt-5 font-mono text-[0.72rem] text-muted">
                <span className="text-accent">$</span> cat intro.txt
              </p>
              <p className="mt-2 max-w-[52ch] text-[0.98rem] leading-relaxed text-muted">
                Siswa RPL di Yogyakarta. Saya membangun web lewat proyek sendiri
                dan proyek sekolah — tiga di antaranya sudah live dan bisa Anda
                buka di bawah.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <a
                  href="#karya"
                  className="inline-flex items-center gap-2 font-medium text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  cd karya
                  <ArrowDown className="size-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
                >
                  open github
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>

      <section
        id="karya"
        aria-labelledby="karya-title"
        className="scroll-mt-20 border-t border-line bg-bg"
      >
        <div className="mx-auto max-w-[1160px] px-4 py-16 sm:px-8 lg:py-24">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>karya pilihan</SectionLabel>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
              {String(featuredProjects.length).padStart(2, "0")} proyek
            </p>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-12">
            <h2
              id="karya-title"
              className="font-mono text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[0.95] tracking-[-0.03em] lg:col-span-7"
            >
              ls projects
            </h2>
            <p className="max-w-[42ch] text-sm leading-relaxed text-muted lg:col-span-5 lg:pt-2">
              Dari konsep sendiri sampai proyek sekolah. Semua tautan di bawah
              bisa dibuka, bukan mockup.
            </p>
          </div>

          <div className="mt-10">
            {feature ? <ProjectFeature project={feature} index={1} /> : null}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index + 2}
              />
            ))}
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
          >
            ls repo lain
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </section>

      <section
        id="tentang"
        aria-labelledby="tentang-title"
        className="scroll-mt-20 border-t border-line bg-bg"
      >
        <div className="mx-auto max-w-[1160px] px-4 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionLabel>tentang</SectionLabel>
            </div>

            <div className="lg:col-span-9">
              <h2
                id="tentang-title"
                className="font-mono text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[0.95] tracking-[-0.03em]"
              >
                cat about.txt
              </h2>

              <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="space-y-4 text-[0.98rem] leading-relaxed text-muted">
                  <p>
                    Saya Rafif Arkana Putra, siswa kelas 10 RPL di Yogyakarta.
                    Saya mulai dari HTML dan CSS, lalu belajar Next.js dan
                    TypeScript lewat proyek yang saya buat sendiri.
                  </p>
                  <p>
                    Website sekolah saya kerjakan dengan OpenCode sebagai alat
                    bantu. Dapur Bu Sari adalah konsep mandiri dengan data
                    contoh; MoodCast eksperimen produk. Saya mengerjakan sendiri
                    dari struktur sampai deploy.
                  </p>
                  <p>
                    Untuk hal yang belum saya kuasai, saya lebih memilih bilang
                    belum bisa daripada memaksakan.
                  </p>
                </div>

                <dl className="border-t border-line">
                  {toolGroups.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-3.5"
                    >
                      <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                        {label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}