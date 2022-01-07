export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead ? this.$nuxtI18nHead({ addSeoAttributes: true }) : null;
    return {
      title: 'Paintatreeplantatree',
      htmlAttrs: {
        ...(i18nHead && i18nHead.htmlAttrs),
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        ...(i18nHead ? [...i18nHead.meta] : []),
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...(i18nHead ? [...i18nHead.link] : []),
      ]
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/app'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    'vue-screen/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Env configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-env/
  env: {
    INSTAFEED_ACCESS_TOKEN: process.env.INSTAFEED_ACCESS_TOKEN,
  },

  // Style resources configuration: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      './styles/shared/*/*.scss',
    ]
  },

  // i18n configuration: https://i18n.nuxtjs.org/
  i18n: {
    baseUrl: 'https://pat-pat.netlify.app', // TODO: Update with real domain name
    locales: [
      { code: 'fr', iso: 'fr-FR' },
      { code: 'en', iso: 'en-US' }
    ],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        fr: require('./locales/fr-FR.json'),
        en: require('./locales/en-US.json'),
      }
    }
  },

  // Vue screen configuration https://www.npmjs.com/package/vue-screen
  screen: {
    extend: 'bootstrap',
  },
}
