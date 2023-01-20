import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import preact from '@astrojs/preact'

export default defineConfig({
  integrations: [preact({
    compat: true,
  }),
  tailwind({
    config: {
      applyBaseStyles: true,
      path: './tailwind.config.cjs',
    },
  })],
})
