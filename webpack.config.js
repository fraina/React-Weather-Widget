var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PathRewriterPlugin = require('webpack-path-rewriter');
var git = require('git-rev-sync');
var isDevelopment = process.env.NODE_ENV === 'development';

var opts = {
  baseUrl: path.resolve(__dirname, 'src', 'js'),
  bundle: isDevelopment ? 'bundle-dev.js' : 'bundle-[chunkhash:7].js',
  vendor: isDevelopment ? 'vendor-dev.js' : 'vendor-[hash:7].js',
  css: isDevelopment ? 'application-dev.css' : 'application-[contenthash:7].css',
  img: isDevelopment ? './img/[name]-dev.[ext]' : './img/[name]-[hash:7].[ext]',
  font: isDevelopment ? './font/[name]-dev.[ext]' : './font/[name]-[hash:7].[ext]'
};

module.exports = {
  context: opts.baseUrl,
  cache: true,
  entry: {
    app: ['index.js'],
    vendor: ['g11n']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: opts.bundle
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules|bower_components/ },
      {
        test: /\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?indentedSyntax&sourceMap&sourceMapContents')
      },
      { test: /\.png$|\.jpe?g$|\.gif$|img\/.*\.svg$/, loader: 'file-loader?name=' + opts.img },
      { test: /\.eot$|\.ttf$|\.woff$|font\/.*\.svg$/, loader: 'file-loader?name=' + opts.font },
      {
        test: /\.jade$/,
        loader: PathRewriterPlugin.rewriteAndEmit({
          name: '[name].html',
          loader: 'jade-html?' + JSON.stringify({
            git: git.short(),
            rev: (new Date()).getTime()
          })
        })
      }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    root: [opts.baseUrl],
    modulesDirectories: ['web_modules', 'node_modules', 'bower_components'],
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.CommonsChunkPlugin('vendor', opts.vendor),
    new ExtractTextPlugin(opts.css, { allChunks: true }),
    new PathRewriterPlugin({ emitStats: false })
  ]
};
