// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

export default defineConfig({
  server: {
    host: true,
    allowedHosts:["https://satisfactory-concern-listprice-arena.trycloudflare.com",
        "nested-louisville-wanna-bone.trycloudflare.com"
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()]
});