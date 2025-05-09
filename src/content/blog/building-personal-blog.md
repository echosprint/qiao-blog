---
title: "Building My Personal Blog with Astro: A Journey"
pubDate: 2024-03-24
description: "A detailed look at how I built this blog using Astro, including technical decisions, challenges, and lessons learned."
category: "Project Showcase"
tags: ["astro", "web development", "project", "tailwindcss"]
---

After years of wanting to start a blog, I finally took the plunge and built one using Astro. In this post, I'll share my experience, technical decisions, and lessons learned along the way.

## Why Astro?

When choosing a framework for my blog, I had several requirements:

1. **Performance**: Fast loading times and optimal SEO
2. **Developer Experience**: Good documentation and active community
3. **Flexibility**: Ability to use different UI frameworks if needed
4. **Content Management**: Easy to write and manage blog posts

Astro checked all these boxes and more. Its "zero JavaScript by default" approach and built-in markdown support made it perfect for a content-focused blog.

## Project Structure

Here's how I organized the project:

```
src/
├── components/
│   ├── BlogPostCard.astro
│   ├── Navigation.astro
│   └── Footer.astro
├── content/
│   └── blog/
│       └── *.md
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogLayout.astro
└── pages/
    ├── index.astro
    ├── blog.astro
    └── blog/[slug].astro
```

## Key Features

### 1. Content Collections

Astro's content collections feature provides type safety and a great authoring experience:

```typescript
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
```

### 2. Responsive Design with Tailwind CSS

I used Tailwind CSS for styling, which made it easy to create a responsive and modern design:

```astro
<article class="group py-8 first:pt-0 last:border-b-0 border-b border-gray-200">
  <div class="space-y-4">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      <a href={`/blog/${post.slug}`} class="hover:text-blue-600 transition-colors">
        {post.data.title}
      </a>
    </h2>
  </div>
</article>
```

### 3. Dynamic Routes

Astro's file-based routing made it simple to create dynamic blog post pages:

```astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
```

### 4. Reading Time Calculation

I added a reading time estimate for each post:

```typescript
const wordsPerMinute = 200;
const words = post.body.split(/\s+/).length;
const readingTime = Math.ceil(words / wordsPerMinute);
```

## Performance Optimizations

1. **Image Optimization**: Using Astro's built-in image optimization
2. **CSS Minification**: Configured in the build process
3. **Partial Hydration**: Only adding JavaScript where necessary
4. **Preloading**: Strategic resource hints for critical assets

## Challenges and Solutions

### Challenge 1: Code Syntax Highlighting

Initially, code blocks weren't properly highlighted. I solved this by integrating Shiki:

```astro
---
import { Code } from 'astro/components';
---

<Code code={codeBlock} lang="typescript" theme="github-dark" />
```

### Challenge 2: RSS Feed

Adding RSS support required some configuration:

```typescript
export function generateRSS(posts) {
  return rss({
    title: "Qiao's Blog",
    description: "Development, technology, and personal growth",
    site: 'https://qiao.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
```

## Future Improvements

I have several features planned for the future:

1. **Search Functionality**: Adding full-text search for blog posts
2. **Newsletter Integration**: Email subscription system
3. **Comments System**: Implementing a comment system for blog posts
4. **Dark Mode**: Adding theme switching capability

## Lessons Learned

1. **Start Simple**: Begin with core features and iterate
2. **Type Safety Matters**: TypeScript and Zod schemas caught many potential issues
3. **Performance First**: It's easier to maintain performance than to improve it later
4. **Documentation is Key**: Good documentation saves time in the long run

## Conclusion

Building this blog with Astro has been a great experience. The framework's focus on performance and developer experience made it possible to create exactly what I wanted without unnecessary complexity.

The source code for this blog is available on [GitHub](https://github.com/echosprint/qiao-blog) if you'd like to take a closer look or use it as inspiration for your own project.

Have you built something with Astro? I'd love to hear about your experience in the comments below! 