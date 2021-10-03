module.exports = () => ({
  test: /\.(png|jpg|gif)$/i,
  use: [
    {
      loader: 'url-loader',
    },
  ],
});
