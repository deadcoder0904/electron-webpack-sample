const mainConfig = require("./webpack.main.config");
const rendererConfig = require("./webpack.renderer.config");

const config = [mainConfig, rendererConfig];

module.exports = config;
