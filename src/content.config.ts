import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * "projects" collection — one markdown file per signature research project.
 * Files live in src/content/projects/*.md
 * Each file is rendered at /research/[slug]/
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:          z.string(),
    slug:           z.string(),
    theme:          z.string(),
    summary:        z.string(),
    figure:         z.string().optional(),
    figureAlt:      z.string().optional(),
    relatedPubs:    z.array(z.string()).default([]),
    pressCoverage:  z.array(z.string()).default([]),
    status:         z.string().optional(),  // "Published", "In progress", etc.
    journal:        z.string().optional(),
    year:           z.number().optional(),
  }),
});

export const collections = { projects };
