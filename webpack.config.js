const path = require('path');
const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
// const htmlEntryPath = path.resolve(__dirname, 'src', 'index.html');
const buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  target: 'web',
  // externals: [nodeExternals()], // Need this to avoid error when working with Express
  entry: [
    'react-hot-loader/patch',
    // 'webpack-hot-middleware/client?reload=true',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // 'webpack-hot-middleware/client?path=//localhost:3000/__webpack_hmr&reload=true',
    javascriptEntryPath
    // htmlEntryPath
  ],
  mode: "development",
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
