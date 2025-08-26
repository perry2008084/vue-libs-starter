import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Multi Vue Library',
  description: 'Vue 3 Component Libraries Documentation',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Element Components', link: '/element-components/' },
      { text: 'Vant Components', link: '/vant-components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ],
      '/element-components/': [
        {
          text: 'Element Components',
          items: [
            { text: 'Introduction', link: '/element-components/' },
            { text: 'Button', link: '/element-components/button' }
          ]
        }
      ],
      '/vant-components/': [
        {
          text: 'Vant Components',
          items: [
            { text: 'Introduction', link: '/vant-components/' },
            { text: 'Button', link: '/vant-components/button' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/multi-vue-lib-starter' }
    ]
  }
})
