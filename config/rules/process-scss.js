const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appPath = require('../app-path.config');

module.exports = () => ({
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          exportLocalsConvention: 'camelCase',
          localIdentName: '[local]_[contenthash:base64:6]',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [['postcss-preset-env']],
        },
      },
    },
    {
      loader: 'sass-loader',
    },
    {
      loader: 'style-resources-loader',
      options: {
        patterns: appPath.styleResources,
      },
    },
  ],
});
