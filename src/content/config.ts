import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/home' }),
    schema: z.object({
        title: z.string(),
        role: z.string(),
        image: z.string(),
        socialLinks: z.object({
            x: z.string(),
            github: z.string()
        })
    })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
    home: home,
    'blog': blogCollection,
}; 