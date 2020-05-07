const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isAnalyse = process.argv.includes('--analyse');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [`${__dirname}/src/index.ts`],
  externals: {
    gon: 'gon',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },
  output: {
    path: `${__dirname}/dist/public`,
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [...(isAnalyse ? [new BundleAnalyzerPlugin()] : [])],
};
