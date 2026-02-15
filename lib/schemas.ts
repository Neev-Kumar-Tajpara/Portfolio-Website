import { z } from "zod";

export const RepositorySchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable().optional(),
    html_url: z.string().url(),
    homepage: z.string().url().nullable().optional(),
    topics: z.array(z.string()).default([]),
    stargazers_count: z.number(),
    language: z.string().nullable().optional(),
    updated_at: z.string(),
});

export type Repository = z.infer<typeof RepositorySchema>;

export const ResearchFrontmatterSchema = z.object({
    title: z.string(),
    abstract: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["working", "published", "in-progress"]).default("in-progress"),
});

export type ResearchFrontmatter = z.infer<typeof ResearchFrontmatterSchema>;

export const ResearchPaperSchema = ResearchFrontmatterSchema.extend({
    slug: z.string(),
    content: z.string(), // MDX processed content or raw string
});

export type ResearchPaper = z.infer<typeof ResearchPaperSchema>;
