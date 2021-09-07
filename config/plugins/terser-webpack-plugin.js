const TerserPlugin = require('terser-webpack-plugin');

module.exports = () =>
  new TerserPlugin({
    extractComments: false,
  });
