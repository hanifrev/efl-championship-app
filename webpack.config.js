const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
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

      // {
      //   test: /\.(jpe?g|gif|png|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['main'],
      favicon: './public/favicon.ico'
    }),
    new WebpackPwaManifest({
      name: 'EFL Championship App',
      short_name: 'EFL Championship',
      description: 'EFL Championship Information Website',
      background_color: '#3367D6',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/assets/logo/icon512.png'),
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/logo/icon225.png'),
          sizes: '225x225',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/logo/icon256.png'),
          sizes: '256x256',
          type: 'image/png'
        }
      ]
    })

    // })
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
