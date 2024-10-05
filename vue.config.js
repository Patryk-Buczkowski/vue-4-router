module.exports = {
  base: "/travel-app/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://travel-dummy-api.netlify.app/",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
