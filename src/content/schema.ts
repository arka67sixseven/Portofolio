import { z } from "zod";

export const projectTypeSchema = z.enum([
  "Konsep mandiri",
  "Proyek sekolah",
  "Eksperimen produk",
]);

export const projectCoverSchema = z.object({
  src: z.string().startsWith("/"),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const projectSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    type: projectTypeSchema,
    year: z.number().int().min(2020).max(2100),
    summary: z.string().min(1),
    problem: z.string().min(1),
    build: z.array(z.string().min(1)).min(2),
    technical: z.array(z.string().min(1)).min(1),
    result: z.array(z.string().min(1)).min(1),
    stack: z.array(z.string().min(1)).min(1),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    cover: projectCoverSchema.optional(),
    disclaimer: z.string().min(1).optional(),
    featured: z.boolean(),
    order: z.number().int().positive(),
  })
  .strict();

export type Project = z.infer<typeof projectSchema>;
