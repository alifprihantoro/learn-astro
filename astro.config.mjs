import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import preact from '@astrojs/preact'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
// import turbolinks from '@astrojs/turbolinks'

// https://astro.build/config
// import partytown from '@astrojs/partytown'
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config

export default defineConfig({
  site: 'https://alifprihantoro.github.io/learn-astro',
  base: '/learn-astro',
  // outDir:'./test',
  integrations: [preact({
    compat: true,
  }), tailwind({
    config: {
      applyBaseStyles: true,
      path: './tailwind.config.cjs',
    },
  }), robotsTxt(), sitemap(),
    // turbolinks(), partytown()
  ],
  // output: "server",
  // adapter: netlify()
})
