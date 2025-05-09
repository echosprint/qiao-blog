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

export const collections = {
    home: home
}; 