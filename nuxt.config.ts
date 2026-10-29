export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'C by C — Célébrations by Chirel',
      meta: [
        { name: 'description', content: 'C by C imagine des invitations digitales élégantes et personnalisées pour célébrer vos moments uniques.' },
        { name: 'theme-color', content: '#f8f3eb' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap' }
      ]
    }
  },
  compatibilityDate: '2025-07-15'
})
