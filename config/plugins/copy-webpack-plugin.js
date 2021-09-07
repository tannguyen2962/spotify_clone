const CopyPlugin = require('copy-webpack-plugin');

module.exports = () =>
  new CopyPlugin({
    patterns: [
      {
        from: 'src/assets',
        to: 'src/assets',
      },
    ],
  });
