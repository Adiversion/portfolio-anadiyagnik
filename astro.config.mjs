import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio-anadiyagnik.pages.dev/',
  integrations: [sitemap()],
  output: 'static',
});
