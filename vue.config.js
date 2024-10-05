module.exports = {
    base: '/vue-4-router'/,
    devServer: {
      proxy: {
        '/api': {
          target: 'https://travel-dummy-api.netlify.app/',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };
  