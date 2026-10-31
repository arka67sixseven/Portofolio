# SECURITY NOTES — Portofolio

Catatan temuan keamanan & keputusan. Audit terakhir: 2026-10-31.
Cara menjalankan audit: `npm run security` (npm audit + gitleaks + semgrep) — exit code ≠ 0 artinya ada temuan.
Kebijakan allowlist ada di `scripts/security-audit.sh` — setiap penambahan WAJIB tercatat di tabel di bawah.

## ✅ Sudah diperbaiki

| Tanggal | Temuan | Severity | Fix |
|---|---|---|---|
| 2026-10-31 | Nama env di CI tidak sinkron (`NEXT_PUBLIC_BASE_URL`) | Low | Diganti ke `NEXT_PUBLIC_SITE_URL` (`.github/workflows/ci.yml`) |
| 2026-10-31 | Angka "03 proyek" dan nomor WhatsApp hardcoded | Low | Derived dari `featuredProjects.length` dan `profile.whatsapp` |
| 2026-10-31 | Target sentuh navigasi/footer kecil | Low | `min-h-[28px]`/`min-h-[24px]` + padding |

## ⚠️ Diterima sadar (accepted risk) — tinjau ulang berkala

| Tanggal | Temuan | Kenapa diterima | Kapan tinjau ulang |
|---|---|---|---|
| 2026-10-31 | CSP `script-src`/`style-src` memakai `'unsafe-inline'` | Next.js 16 membutuhkan inline script untuk hidrasi; uji hapus di produksi gagal (console CSP violation). Defense-in-depth tetap ada via `object-src 'none'`, `frame-ancestors 'none'`, `form-action 'none'`, `base-uri 'self'`. | Saat Next.js mendukung CSP nonce/hash untuk SSG, atau saat memakai middleware nonce. |
| 2026-10-31 | HSTS tanpa `preload` | Domain belum final dan belum disubmit ke preload list. | Setelah domain produksi final dan HTTPS-only. |
| 2026-10-31 | 16 CVE moderate pada dev-dependencies (eslint chain → minimatch) | 0 high/critical; hanya tooling dev, tidak masuk bundle produksi; `npm audit` high+ bersih. | Saat patch upstream tersedia; `npm audit fix --force` hanya jika diperlukan. |
| 2026-10-31 | Validasi `cover.src` hanya `startsWith("/")` | Konten adalah data tepercaya (author), bukan input user; `check-content.ts` memverifikasi file. | Jika nanti ada input user untuk cover path. |

## 📋 Keputusan terbuka (belum diubah — butuh keputusan produk)

- `NEXT_PUBLIC_SITE_URL` wajib diset di platform deploy; fallback saat ini `http://localhost:3000`.
- Verifikasi source map publik di deployment preview (`.next/server` berisi `.map`, tapi tidak ada `productionBrowserSourceMaps`).

## 📜 Aturan

- Jangan pernah commit `.env` — dijaga `.gitignore` + gitleaks (`npm run security` **dan** pre-commit hook).
- Jalankan `npm run security` sebelum deploy; workflow 4-pass ada di `AGENTS.md`.
- Temuan baru / perubahan kebijakan allowlist → selalu tulis di sini.