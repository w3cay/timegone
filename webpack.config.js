const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const precss = require('precss'); // 实现类Sass的功能，变量，嵌套，mixins
const autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀

module.exports = function(env) {
  const dev = env === 'dev' ? true : false;
  return {
    entry: {
      app: 'index.js'
    },
    devtool: "source-map",
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: '[name].bundle.js',
      publicPath: '/timegone/dist/',
      sourceMapFilename: '[name].map'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      clientLogLevel: 'none',
      hot: true,
      noInfo: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$|\.css$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'postcss-loader']
          })
        }, {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      // new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
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
      new ExtractTextPlugin('bundle.css'),
      new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html', inject: true}),
      new webpack.LoaderOptionsPlugin({
        debug: false
      }),
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
