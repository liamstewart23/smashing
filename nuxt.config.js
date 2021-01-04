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
          "Hello! I am Liam Stewart, a Web Developer living in London Ontario."
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Liam Stewart - Web Developer | London Ontario'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Hello! I am Liam Stewart, a Web Developer living in London Ontario.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Liam Stewart - Web Developer | London Ontario'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Hello! I am Liam Stewart, a Web Developer living in London Ontario.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://liamstewart.ca/icon.png'
      },
      // {
      //   hid: 'og:url',
      //   property: 'og:url',
      //   content: `www.mydomain.com${routePath}`
      // },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'liamstewart.ca'
      },
      // {
      //   hid: 'og:locale',
      //   property: 'og:locale',
      //   content: `en`
      // },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/png'
      },
      // {
      //   hid: 'twitter:card',
      //   property: 'twitter:card',
      //   content: `${MyStringHandler.truncate(overviewDefault, 65)}`
      // },
      // {
      //   hid: 'twitter:site',
      //   property: 'twitter:site',
      //   content: 'mydomain'
      // },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Liam Stewart - Web Developer | London Ontario'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Hello! I am Liam Stewart, a Web Developer living in London Ontario.'
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: 'Liam Stewart'
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src',
        content: 'https://liamstewart.ca/icon.png'
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: 'liamstewart.ca'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://liamstewart.ca/icon.png'
      },
      // {
      //   hid: 'twitter:url',
      //   name: 'twitter:url',
      //   content: `www.mydomain.com${routePath}`
      // }
    ],
    link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  generate: {
    fallback: true
  },

  webfontloader: {
    custom: {
      families: [
        'Roboto:n3,n9',
        'Quicksand',
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Roboto:300,900&display=swap',
        'https://fonts.googleapis.com/css?family=Quicksand&display=swap'
      ]
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#2f2f2f" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/projects.server.js`,{ src: '~plugins/ga.js', mode: 'client' }],
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

  pwa: {
    meta: {
      theme_color: '#2f2f2f'
    },
    manifest: {
      name: 'Liam Stewart\'s Website',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  sitemap: {
    hostname: "https://liamstewart.ca",
    gzip: true
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
