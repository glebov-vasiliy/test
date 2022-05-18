// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
}

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index.tsx'),
  },

  output: {
    filename: '[name].js',
    path: paths.build,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 },
          },
        ],
      },

      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(t|j)sx?$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: { loader: 'tsx', target: 'es2015' },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
      filename: 'index.html',
      inject: true,
      alwaysWriteToDisk: true,
      minify: {
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
      },
    }),
  ],
  devServer: {
    publicPath: '/',
    host: '127.0.0.1',
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only',
    port: '3000',
    overlay: true,
    historyApiFallback: true,
    hot: true, // HOT RELOAD param without reloading page
    compress: true,
    quiet: false,
    inline: true, // HOT RELOAD param
    https: false,
  },
}
