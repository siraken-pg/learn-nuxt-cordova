// const JavaScriptObfuscator = require('webpack-obfuscator')

export default {
  ssr: false,
  /*
  <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;"> -->
  */
  head: {
    title: 'cordova',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'initial-scale=1, width=device-width, viewport-fit=cover'
      },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'color-scheme', content: 'light dark' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'cordova.js', body: true }]
  },
  css: ['@/assets/scss/app.scss'],
  plugins: [
    // new JavaScriptObfuscator({
    //   stringArrayEncoding: true,
    //   stringArrayThreshold: 1,
    //   deadCodeInjection: true,
    //   deadCodeInjectionThreshold: 0.2
    // })
  ],
  components: true,
  transition: 'page',
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {
    publicPath: '/nuxt/',
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  // Router
  router: {
    mode: 'hash'
  },

  // Server: Debug
  server: {
    host: '0.0.0.0'
  }
}
