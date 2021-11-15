const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    hot: true,
    static: path.join(__dirname, 'public'),
    port: 5300,
    liveReload: false
  },
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
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
        test: /\.scss$/i,
        use: [
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sales',
      filename: 'remoteEntry.js',
      exposes: {
        './Sales': './src/bootstrap.js'
      },
      shared: [
        {
          ...deps,
          // react: { singleton: true, eager: true },
          // 'react-dom': { singleton: true, eager: true }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
