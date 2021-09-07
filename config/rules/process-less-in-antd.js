const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  test: /\.less$/,
  include: /antd.*\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#c91f37',
            'border-radius-base': '6px',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
});
