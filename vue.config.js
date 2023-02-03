const path = require('path')

module.exports = {
  devServer: {
    port: 8889,
    proxy: {
      '/rest': {
        target: 'http://yapi.smart-xwork.cn/mock/137494'
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.styl$/,
          loader: "stylus-loader",
        }
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    }
  }
}