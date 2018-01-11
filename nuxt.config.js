module.exports = {
  router: {
    base: '/'
  },
  css: [
    {src: 'node_modules/the-grid-flexbox/css/the-grid.min.css', lang: 'css'}
  ],
  head: {
    title: 'Clinify - Encontre, agende e gerencie suas consultas e pacientes online',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Clinify description'},
      {name: 'author', content: 'clinify'},
      {name: 'robots', content: 'index/follow'},
      {name: 'googlebot', content: 'index/follow'},
      {name: 'google-site-verification', content: 'g9-bdJ7-nTPA2DXSSYQRWV_ItzP_-Bj6wIsEJlDoZB4'},
      // google+
      {itemprop: 'name', content: 'Clinify'},
      {itemprop: 'description', content: 'Description Clinify'},
      {itemprop: 'image', content: 'https://gustavoquinalha.github.io/clinify-home/intro.png'},
      // facebook
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Clinify'},
      {property: 'og:url', content: 'https://gustavoquinalha.github.io/clinify-home/'},
      {property: 'og:site_name', content: 'Clinify'},
      {property: 'og:image', content: 'https://gustavoquinalha.github.io/clinify-home/intro.png'},
      {property: 'og:description', content: 'Description Clinify'},
      {property: 'og:locale', content: 'pt_Br'},
      {property: 'fb:app_id', content: '122670998365518'},
      {property: 'fb:admins', content: '111111'},
      // twitter
      {name: 'twitter:card', content: 'Summary'},
      {name: 'twitter:title', content: 'Clinify'},
      {name: 'twitter:description', content: 'Clinify'},
      {name: 'twitter:creator', content: 'clinify'},
      {name: 'twitter:image', content: 'https://gustavoquinalha.github.io/clinify-home/intro.png'},
      // android
      {name: 'msapplication-TileColor', content: '#0081ff'},
      {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#0081ff'}
    ],
    link: [
      {rel: 'sitemap', type: 'application/xml', content: 'https://gustavoquinalha.github.io/clinify-home/sitemap.xml'},
      {rel: 'manifest', href: '/manifest.json'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png'},
      {rel: 'base', href: 'https://gustavoquinalha.github.io/clinify-home/'},
      {rel: 'canonical', href: 'https://gustavoquinalha.github.io/clinify-home/'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.2.0/aos.css'}
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.2.0/aos.js'}
    ]
  },

  loading: {color: '#5ee4b7', height: '5px'},

  plugins: [
    {src: '~plugins/animation.js', ssr: false},
    {src: '~plugins/ga.js', ssr: false}
  ],
  modules: [
  ],
  proxy: [
  ],
  build: {}
}