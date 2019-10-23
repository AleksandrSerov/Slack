const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isAnalyse = process.argv.includes('--analyse');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: ['babel-polyfill', `${__dirname}/src/index.js`],
  externals: {
    gon: 'gon',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    path: `${__dirname}/dist/public`,
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [...(isAnalyse ? [new BundleAnalyzerPlugin()] : [])],
};
