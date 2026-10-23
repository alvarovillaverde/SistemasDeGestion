import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'metadata-compile-sites-table.trycloudflare.com',
      "boxes-martha-condos-tax.trycloudflare.com"
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});