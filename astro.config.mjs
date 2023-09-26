import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://whsmedia.se',

  integrations: [tailwind(), sitemap(), prefetch(), partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  })]
});