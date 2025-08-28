// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en-us',
    locales: [
      { code: 'en-us', name: 'English', file: 'en-us.json' },
      { code: 'de-de', name: 'Germany', file: 'de-de.json' },
    ],
  },
});
