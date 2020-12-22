const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|tiff|ico)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['main']
    })
    // new WorkboxPlugin.GenerateSW({
    //   // Do not precache images
    //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],

    //   // Define runtime caching rules.
    //   runtimeCaching: [
    //     {
    //       // Match any request that ends with .png, .jpg, .jpeg or .svg.
    //       urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    //       // Apply a cache-first strategy.
    //       handler: 'CacheFirst',

    //       options: {
    //         // Use a custom cache name.
    //         cacheName: 'images',

    //         // Only cache 10 images.
    //         expiration: {
    //           maxEntries: 10
    //         }
    //       }
    //     }
    //   ]
    // })
  ]
}
