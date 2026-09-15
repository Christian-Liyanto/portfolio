import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    role: z.string(),
    kind: z.enum(["game", "tool"]),
    featured: z.boolean().default(false),
    order: z.number(),
    orientation: z.enum(["portrait", "landscape"]),
    stack: z.array(z.string()),
    videos: z
      .array(
        z.object({
          src: z.string().optional(),
          youtube: z.string().optional(),
          poster: z.string(),
          caption: z.string(),
        }),
      )
      .default([]),
    poster: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
