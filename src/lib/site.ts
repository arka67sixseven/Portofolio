import { profile } from "@/content/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function whatsappDisplay() {
  const number = profile.whatsapp;
  return `+${number.slice(0, 2)} ${number.slice(2, 5)}-${number.slice(5, 9)}-${number.slice(9)}`;
}

export function whatsappHref() {
  const message = encodeURIComponent(
    `Halo ${profile.shortName}, saya melihat portofolio Anda. Saya ingin bertanya soal pembuatan website.`,
  );

  return `https://wa.me/${profile.whatsapp}?text=${message}`;
}

export function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}
