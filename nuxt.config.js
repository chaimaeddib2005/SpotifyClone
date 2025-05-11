export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'pinia-plugin-persistedstate/nuxt'],
  ssr: false,

  runtimeConfig: {
    public: {
      spotifyClientId: process.env.NUXT_PUBLIC_SPOTIFY_CLIENT_ID,
      
      spotifyRedirectUri: process.env.NUXT_PUBLIC_SPOTIFY_REDIRECT_URI
    },
    spotifyClientSecret: process.env.NUXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  },

  compatibilityDate: '2025-05-11'
})