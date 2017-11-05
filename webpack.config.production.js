const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
