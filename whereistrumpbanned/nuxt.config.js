export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Where is trump banned?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "A simple website to track websites and services that have banned or restricted Donald Trump's accounts.",
      },
    ],
    script: [
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token": "901fe663794446628432e71400d3fb37"}',
      },
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/x-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['assets/my-style.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
