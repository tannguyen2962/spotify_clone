const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = require('../app-path.config');

module.exports = () =>
  new HtmlWebpackPlugin({
    template: appPath.indexHtml,
  });
