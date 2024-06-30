// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@primevue/nuxt-module','@vueuse/nuxt'],
  css: ['assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
alias:{
    "assets":'/public/assets',
    "images":'/public/assets/images',
},
  primevue:{
    usePrimeVue:true,
options:{
      unstyled:true
},
    components: {
      prefix: 'Prime',
      include:'*'
    }},
})