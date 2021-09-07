const appPath = require('../app-path.config');

module.exports = () => ({
  test: /\.svg$/,
  include: appPath.srcDir,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true,
      },
    },
  ],
});
