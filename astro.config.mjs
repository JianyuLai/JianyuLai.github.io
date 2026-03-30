// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jianyulai.github.io',
  base: '/academic-website/',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});