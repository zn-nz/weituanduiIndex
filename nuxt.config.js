export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "微团队-每个人自己的团队",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content: "微团队,淘客,weituandui.co,www.weituandui.co"
      },
      {
        hid: "description",
        name: "description",
        content: "微团队,每个人自己的团队"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],
  pwa: {
    manifest: {
      name: "微团队",
      lang: "fa",
      useWebmanifestExtension: false
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 80,
    host: "0.0.0.0",
    timing: false,
    // https: {
    //   key: fs.readFileSync(
    //     path.resolve("static/www.laycoder.com", "./2_www.laycoder.com.key")
    //   ),
    //   cert: fs.readFileSync(
    //     path.resolve(
    //       "static/www.laycoder.com",
    //       "./1_www.laycoder.com_bundle.crt"
    //     )
    //   )
    // }
  }
};
