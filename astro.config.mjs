import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [
    starlight({
      title: 'Dwarflight',
      social: {
        github: 'https://github.com/indyandie/dwarflight',
      },
      components: {
        Head: './src/component/overrides/Head.astro',
        PageFrame: './src/component/overrides/PageFrame.astro',
        TwoColumnContent: './src/component/overrides/TwoColumnContent.astro',
        MobileMenuToggle: './src/component/overrides/MobileMenuToggle.astro',
        Header: './src/component/overrides/Header.astro',
        ContentPanel: './src/component/overrides/ContentPanel.astro',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      customCss: [
        './src/styles/global.css',
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        useFsEvents: false,
        usePolling: true,
      },
    },
  },
})
