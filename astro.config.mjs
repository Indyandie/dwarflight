import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

const siteURl = 'https://dwarf.indieandy.cc/'

export default defineConfig({
  site: siteURl,
  integrations: [
    starlight({
      title: 'Dwarflight',
      logo: {
        src: './src/assets/twemoji/dwarf-opt.svg',
      },
      social: [
        { icon: 'github', label: 'github', href: 'https://github.com/indyandie/dwarflight' },
      ],
      components: {
        Head: './src/component/overrides/Head.astro',
        PageFrame: './src/component/overrides/PageFrame.astro',
        TwoColumnContent: './src/component/overrides/TwoColumnContent.astro',
        MobileMenuToggle: './src/component/overrides/MobileMenuToggle.astro',
        Header: './src/component/overrides/Header.astro',
        ContentPanel: './src/component/overrides/ContentPanel.astro',
        PageTitle: './src/component/overrides/PageTitle.astro',
        TableOfContents: './src/component/overrides/TableOfContents.astro',
        PageSidebar: './src/component/overrides/PageSidebar.astro',
      },
      sidebar: [
        { label: 'Why?', link: 'why/' },
        {
          label: 'overrides',
          autogenerate: { directory: 'overrides' },
        },
        {
          label: 'Playground',
          autogenerate: { directory: 'playground' },
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
