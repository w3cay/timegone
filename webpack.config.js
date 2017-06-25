const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function(env) {
  const dev = env === 'dev'
    ? true
    : false;
  return {
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'index.js'
    ],
    devtool: "eval",
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: '[name].bundle.js',
      publicPath: '/timegone/',
      sourceMapFilename: '[name].map'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      clientLogLevel: 'none',
      hot: true,
      noInfo: true
    },
    module: {
      rules: [
        {
          test: /\.scss$|\.css$/,
          exclude: /node_modules/,
          use: ['style-loader','css-loader','sass-loader','postcss-loader']
          // use: ExtractTextPlugin.extract({
          //   fallback: "style-loader",
          //   use: ['css-loader','sass-loader','postcss-loader']
          // })
        }, {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      }),
      // new ExtractTextPlugin('bundle.css'),
      new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html', inject: true}),
      new webpack.LoaderOptionsPlugin({debug: false}),
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        // server: { baseDir: ['dist'] },
        proxy: 'http://localhost:8080/'
      },
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }),
      new DashboardPlugin(),
    ],
    resolve: {
      extensions: [
        '.js', '.json'
      ],
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ]

    }
  };
}
