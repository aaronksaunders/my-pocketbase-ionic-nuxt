// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/ionic'],
  ionic : {
    integrations : {
        icons : true,
        meta : true,
    },
    css : {
        utilities : true
    }
  }
});
