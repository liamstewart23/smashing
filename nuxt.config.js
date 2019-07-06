export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Liam Stewart - Web Developer | London Ontario",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", type: "stylesheet", href: "https://raw.githubusercontent.com/jonsuh/hamburgers/master/dist/hamburgers.css" }

    ]
  },

  webfontloader: {
    google: {
      families: ['Quicksand']
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/projects.server.js`],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-webfontloader',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
