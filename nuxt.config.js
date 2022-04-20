export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '株式会社テイチャク: +onestep(公式LINE拡張ツール)',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '株式会社テイチャクが提供する「+onestep」はコミュニティ形成／新規採用／従業員定着支援が一元管理出来る、定額の公式LINE拡張ツールです。' },
      { name: 'format-detection', content: 'telephone=no,+one step,+onestep,プラスワンステップ,集客,定着' },
      { hid: 'og:site_name', property: 'og:site_name', content: '+one step' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.teichack.com/' },
      { hid: 'og:title', property: 'og:title', content: '株式会社テイチャク: +onestep(公式LINE拡張ツール)' },
      { hid: 'og:description', property: 'og:description', content: '株式会社テイチャクが提供する「+onestep」はコミュニティ形成／新規採用／従業員定着支援が一元管理出来る、定額の公式LINE拡張ツールです。' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.png' },
      { name: 'twitter:card', content: 'summary' }//twitterの画像サイズ
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollto',
    '~plugins/scroll',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Noto+Sans+JP:400,700']
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
