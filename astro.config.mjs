// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://echosprint.github.io',
  base: '/qiao-blog',
  vite: {
    plugins: [tailwindcss()]
  }
});