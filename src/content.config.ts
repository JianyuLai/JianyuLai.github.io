import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title:          z.string(),
  slug:           z.string(),
  theme:          z.string(),
  summary:        z.string(),
  figure:         z.string().optional(),
  figureAlt:      z.string().optional(),
  relatedPubs:    z.array(z.string()).default([]),
  pressCoverage:  z.array(z.string()).default([]),
  status:         z.string().optional(),
  journal:        z.string().optional(),
  year:           z.number().optional(),
});

/**
 * "projects" collection — English project pages at /research/[slug]/
 * Uses *.md (not **) so it does not pick up zh/ subdirectory.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: projectSchema,
});

/**
 * "projects_zh" collection — Chinese project pages at /ch/research/[slug]/
 */
const projects_zh = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects/zh' }),
  schema: projectSchema,
});

export const collections = { projects, projects_zh };
