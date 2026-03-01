import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio.anadisyagnik.workers.dev',
  integrations: [sitemap()],
  output: 'static',
});
