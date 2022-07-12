export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mikiya-portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui", "@/plugins/scroll.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/device",
    "@nuxtjs/moment"
  ],
  moment: {
    locales: ["ja"]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-webfontloader",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/sitemap"
  ],

  webfontloader: {
    google: {
      families: ["Noto+Sans+JP:100,300,400,500,700,900"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },

  sitemap: {
    hostname: "http://localhost:3000",
    exclude: ["/admin", "/admin_detail", "/admin_edit", "/admin_new", "/login"],
    routes: async () => {
      const axios = require("axios");
      const response = await axios.get("http://localhost:5000");
      return response.data.data.map(item => ({
        url: `blog_detail?id=${item.id}`,
        lastmod: item.createdAt
      }));
    }
  },

  axios: {
    baseURL: "http://localhost:5000/"
  },

  auth: {
    redirect: {
      home: "/admin",
      logout: "/login"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/users/login",
            method: "post",
            propertyName: "token"
          },
          logout: false,
          user: {
            url: "/users/user",
            method: "get",
            propertyName: "user"
          }
        }
      }
    }
  }
};
