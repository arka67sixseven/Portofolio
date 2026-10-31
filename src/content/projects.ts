import { projectSchema, type Project } from "./schema";

const rawProjects: Project[] = [
  {
    slug: "dapur-bu-sari",
    title: "Dapur Bu Sari",
    subtitle: "Katering rumahan & frozen food, Sleman",
    type: "Konsep mandiri",
    year: 2026,
    summary:
      "Landing page satu halaman untuk katering rumahan: menu, jam buka, dan pesanan lewat WhatsApp.",
    problem:
      "Usaha katering rumahan butuh tempat untuk menjelaskan menu dan menerima pesanan tanpa bergantung pada marketplace.",
    build: [
      "Katalog menu dengan filter kategori",
      "Tombol pesan WhatsApp otomatis per menu",
      "Status buka/tutup dari jam operasional",
      "Galeri dengan lightbox dan peta lazy-load",
    ],
    technical: [
      "HTML, Tailwind CSS 4, dan JavaScript tanpa framework atau backend",
      "Data menu dipisah di js/data.js agar mudah diganti",
      "Header keamanan produksi lewat vercel.json",
      "Animasi dimatikan saat prefers-reduced-motion",
    ],
    result: [
      "Live di Vercel",
      "Responsif dari 320px",
      "Kontras teks dan navigasi keyboard dicek",
    ],
    stack: ["HTML", "Tailwind CSS 4", "JavaScript", "Vercel"],
    liveUrl: "https://webumkm-delta.vercel.app",
    repoUrl: "https://github.com/arka67sixseven/webumkm",
    cover: {
      src: "/work/dapur-bu-sari-cover.jpg",
      alt: "Hero landing page Dapur Bu Sari dengan ilustrasi mangkuk nasi dan tombol pesan WhatsApp",
      width: 1440,
      height: 720,
    },
    disclaimer:
      "Data menu, ulasan, dan angka di situs ini adalah contoh. Bukan klien berbayar.",
    featured: true,
    order: 1,
  },
  {
    slug: "smp-taman-dewasa-jetis",
    title: "SMP Taman Dewasa Jetis",
    subtitle: "Sekolah berwawasan budaya, Yogyakarta",
    type: "Proyek sekolah",
    year: 2026,
    summary:
      "Website profil sekolah dengan berita, profil, PPDB, dan konten statis yang mudah dirawat.",
    problem:
      "Informasi sekolah tersebar di banyak halaman dan platform; calon siswa serta orang tua butuh satu tempat yang jelas.",
    build: [
      "Profil sekolah, visi-misi, sambutan, dan fasilitas",
      "Berita dan kegiatan",
      "PPDB online dengan tautan WhatsApp dan email",
      "Video profil lewat embed YouTube",
    ],
    technical: [
      "Next.js App Router, React, dan TypeScript",
      "Konten statis di folder data, tanpa CMS",
      "Struktur halaman berbagi layout dan metadata",
      "Deploy Vercel",
    ],
    result: [
      "Live di Vercel",
      "Halaman profil, berita, dan PPDB bisa dibuka",
      "Navigasi desktop dan mobile",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS 4", "Vercel"],
    liveUrl: "https://spedeta.vercel.app",
    repoUrl: "https://github.com/arka67sixseven/spedeta",
    cover: {
      src: "/work/smp-taman-dewasa-cover.jpg",
      alt: "Halaman profil SMP Taman Dewasa Jetis dengan judul besar dan navigasi bagian",
      width: 1440,
      height: 796,
    },
    featured: true,
    order: 2,
  },
  {
    slug: "moodcast",
    title: "MoodCast",
    subtitle: "Eksperimen produk: mood sebagai cuaca",
    type: "Eksperimen produk",
    year: 2026,
    summary:
      "Aplikasi check-in mood yang mengubah perasaan harian menjadi sistem cuaca pribadi.",
    problem:
      "Mencatat mood sering terasa seperti formulir. MoodCast mencoba membuatnya lebih mudah dilihat dan diingat.",
    build: [
      "Check-in mood dengan lima kondisi cuaca",
      "Ringkasan iklim emosional",
      "Arsip check-in",
      "Alur tanpa akun",
    ],
    technical: [
      "Next.js, React, dan TypeScript",
      "Tailwind CSS untuk antarmuka",
      "Tampilan responsif dengan reduced motion",
      "Deploy Vercel",
    ],
    result: [
      "Live di Vercel",
      "Alur check-in bisa dicoba tanpa login",
      "Tampilan desktop dan mobile",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://moodcast-two.vercel.app",
    repoUrl: "https://github.com/arka67sixseven/moodcast",
    cover: {
      src: "/work/moodcast-cover.jpg",
      alt: "Hero MoodCast dengan kartu cuaca Partly Cloudy dan lima pilihan mood",
      width: 1440,
      height: 900,
    },
    featured: true,
    order: 3,
  },
  {
    slug: "sd-taman-muda-jetis",
    title: "SD Taman Muda Jetis",
    subtitle: "Website profil sekolah dasar, Yogyakarta",
    type: "Proyek sekolah",
    year: 2026,
    summary:
      "Website profil sekolah dengan halaman profil, ekstrakurikuler, berita, galeri, dan PPDB.",
    problem:
      "Sekolah butuh satu tempat untuk profil, kegiatan, dan informasi penerimaan siswa baru.",
    build: [
      "Halaman profil dan ekstrakurikuler",
      "Berita dan galeri kegiatan",
      "Informasi PPDB",
      "Desain responsif",
    ],
    technical: [
      "Next.js 15, React 19, dan TypeScript",
      "Tailwind CSS 3",
      "Deploy Vercel",
    ],
    result: ["Live di Vercel"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS 3", "Vercel"],
    liveUrl: "https://websekolah-sd.vercel.app",
    repoUrl: "https://github.com/arka67sixseven/webSekolahSD",
    featured: false,
    order: 4,
  },
  {
    slug: "tk-taman-indria-jetis",
    title: "TK Taman Indria Jetis",
    subtitle: "Website profil taman kanak-kanak, Yogyakarta",
    type: "Proyek sekolah",
    year: 2026,
    summary:
      "Website profil TK dengan metode belajar, kelas, guru, kegiatan, dan informasi PPDB.",
    problem:
      "TK butuh menjelaskan metode belajar dan kegiatan kepada orang tua calon siswa.",
    build: [
      "Halaman metode belajar dan kelompok kelas",
      "Profil guru dan kegiatan",
      "Informasi PPDB",
      "Desain responsif",
    ],
    technical: [
      "Next.js App Router, React, dan TypeScript",
      "Tailwind CSS 4",
      "Deploy Vercel",
    ],
    result: ["Live di Vercel"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS 4", "Vercel"],
    liveUrl: "https://websekolah-tk.vercel.app",
    repoUrl: "https://github.com/arka67sixseven/webSekolahTK",
    featured: false,
    order: 5,
  },
];

export const projects = projectSchema.array().parse(rawProjects);

for (const project of projects) {
  if (project.featured && !project.cover) {
    throw new Error(`Proyek unggulan "${project.slug}" belum punya cover.`);
  }
  if (!project.liveUrl) {
    throw new Error(`Proyek "${project.slug}" belum punya URL live.`);
  }
}

export function hasLiveUrl(
  project: Project,
): project is Project & { liveUrl: string } {
  return Boolean(project.liveUrl);
}

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export const otherProjects = projects
  .filter((project) => !project.featured)
  .sort((a, b) => a.order - b.order);
