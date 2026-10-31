import { profile } from "@/content/profile";
import { whatsappDisplay, whatsappHref } from "@/lib/site";

import { ArrowUpRight } from "./icons";

export function ContactSection() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="scroll-mt-20 border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-[1160px] px-4 py-16 sm:px-8 lg:py-24">
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-muted">contact.sh</span>
          </div>

          <div className="p-5 sm:p-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
              {"// kontak"}
            </p>
            <h2
              id="kontak-title"
              className="mt-4 font-mono text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-[-0.03em]"
            >
              ssh contact
            </h2>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-muted">
              Kalau Anda butuh landing page atau website profil untuk usaha atau
              sekolah, kirim pesan. Saya biasanya membalas dalam 1 hari kerja.
            </p>

            <div className="mt-8 border-t border-line">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-w-0 grid-cols-[5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-4 transition-colors hover:border-accent/60"
              >
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  whatsapp
                </span>
                <span className="min-w-0 break-all text-sm text-ink transition-colors group-hover:text-accent">
                  {whatsappDisplay()}
                </span>
                <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-accent" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="group grid min-w-0 grid-cols-[5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-4 transition-colors hover:border-accent/60"
              >
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  email
                </span>
                <span className="min-w-0 break-all text-sm text-ink transition-colors group-hover:text-accent">
                  {profile.email}
                </span>
                <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-accent" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-w-0 grid-cols-[5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-4 transition-colors hover:border-accent/60"
              >
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  github
                </span>
                <span className="min-w-0 break-all text-sm text-ink transition-colors group-hover:text-accent">
                  github.com/arka67sixseven
                </span>
                <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-accent" />
              </a>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-line pt-5">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  lokasi
                </p>
                <p className="mt-1 text-sm">{profile.locationFull}</p>
              </div>

              <div className="border-t border-line pt-5">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  status
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent"
                  />
                  {profile.availability}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[48ch] text-sm leading-relaxed text-muted">
              Sertakan jenis usaha atau sekolah, jumlah halaman, dan contoh situs
              yang Anda suka. Itu cukup untuk saya memberi perkiraan waktu.
            </p>
          </div>

          <footer className="border-t border-line px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-sm font-bold text-ink">
                  {profile.name}
                </p>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                  portofolio 2026
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                <span>{profile.locationFull}</span>
                <span>next.js · tailwind</span>
                <a
                  href="#konten"
                  className="inline-flex min-h-[24px] items-center py-1 text-ink/70 transition-colors hover:text-ink"
                >
                  kembali ke atas ↑
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}