const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
        compress: true
      }
    })
  ]
};

module.exports = config;
