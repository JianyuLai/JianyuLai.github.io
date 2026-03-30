// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jianyulai.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
