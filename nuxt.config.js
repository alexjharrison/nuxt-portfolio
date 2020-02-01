export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Portfolio | Alex Harrison',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Alex Harrison's Stunning Portfolio Website`
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  /*
   ** Google Analytics module
   */
  googleAnalytics: {
    id: 'UA-130438116-2'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    '@bazzite/nuxt-optimized-images',

    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }]
  ],

  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // analyze: true,

    //eslint-disable-next-line
    extend(config, ctx) {}
  }
}
