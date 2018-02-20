const path = require("path");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const base = require("./webpack.base.config");
const buildPath = path.resolve(__dirname, "./dist");

const main = merge(base, {
  entry: "./main.js",
  output: {
    filename: "main.js",
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new UglifyJsPlugin()],
  node: {
    __dirname: false,
    __filename: false
  },
  target: "electron-main"
});

module.exports = main;
