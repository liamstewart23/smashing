export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Liam Stewart - Web Developer | London Ontario",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Hello! I am Liam Stewart, a Website Developer living in London Ontario."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  webfontloader: {
    google: {
      families: ["Roboto:300,900", "Quicksand"]
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
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "nuxt-webfontloader",
    "nuxt-purgecss",
    [
      "@bazzite/nuxt-netlify",
      {
        mergeSecurityHeaders: true
      }
    ],
    [
      "nuxt-netlify-http2-server-push",
      {
        // Specify relative path to the dist directory and its content type
        resources: [
          { path: "**/*.js", as: "script" },
          { path: "images/*.jpg", as: "image" },
          { path: "images/*.png", as: "image" }
        ]
      }
    ]
  ],

  sitemap: {
    hostname: "https://liamstewart.ca",
    gzip: true
  },

  purgeCSS: {
    // your settings here
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
