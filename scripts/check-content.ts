import { existsSync } from "node:fs";
import { join } from "node:path";

import { featuredProjects, projects } from "../src/content/projects";

const errors: string[] = [];
const slugs = new Set<string>();

for (const project of projects) {
  if (slugs.has(project.slug)) {
    errors.push(`Slug ganda: ${project.slug}`);
  }
  slugs.add(project.slug);

  if (project.type === "Konsep mandiri" && !project.disclaimer) {
    errors.push(`${project.slug}: proyek konsep wajib punya disclaimer.`);
  }

  if (!project.liveUrl) {
    errors.push(`${project.slug}: liveUrl wajib diisi.`);
  } else if (!project.liveUrl.startsWith("https://")) {
    errors.push(`${project.slug}: liveUrl harus HTTPS.`);
  }

  if (project.cover) {
    const coverPath = join(
      process.cwd(),
      "public",
      project.cover.src.replace(/^\//, ""),
    );

    if (!existsSync(coverPath)) {
      errors.push(`${project.slug}: cover tidak ditemukan (${project.cover.src}).`);
    }
  }
}

if (featuredProjects.length !== 3) {
  errors.push(
    `Jumlah proyek unggulan harus 3, sekarang ${featuredProjects.length}.`,
  );
}

if (errors.length > 0) {
  console.error("Konten belum valid:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `OK — ${projects.length} proyek, ${featuredProjects.length} unggulan, semua cover tersedia.`,
);
