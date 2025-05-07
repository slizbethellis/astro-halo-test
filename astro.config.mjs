// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        // Most of the needed icons come from Iconoir
        iconoir: ['arrow-left', 'arrow-right', 'instagram', 'mastodon', 'menu', 'nav-arrow-down', 'xmark'],
        // Dark and light mode, mail, and search icons from Lucide
        lucide: ['mail', 'moon-star', 'search', 'sun'],
      }
    })
  ],
});