const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = () =>
  new CompressionWebpackPlugin({
    test: /\.html$|\.js$|\.css$|\.jpg$|\.png$\.svg$/,
    filename: '[path][base].br',
    algorithm: 'brotliCompress',
  });
