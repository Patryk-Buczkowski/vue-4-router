module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://travel-dummy-api.netlify.app/',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }, // opcjonalne
        },
      },
    },
  };
  