import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        role: z.string(),
        image: z.string()
    })
});

export const collections = {
    'home': homeCollection
}; 