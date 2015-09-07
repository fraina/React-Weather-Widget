'use strict';

var bs = require('browser-sync').create();
var spa = require('browser-sync-spa');
var htmlInjector = require('bs-html-injector');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.config');
webpackConfig.entry.vendor.push('webpack-hot-middleware/client?overlay=false&reload=true');
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.optimize.OccurenceOrderPlugin());

var bundler = webpack(webpackConfig);

bs.use(spa());
bs.use(htmlInjector);
bs.watch('src/*.jade').on('change', function () {
  htmlInjector();
});

bs.init({
  port: 4000,
  server: {
    baseDir: 'build',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true
      }),
      webpackHotMiddleware(bundler)
    ]
  },

  files: [
    'build/**/*.*'
  ],
  logPrefix: 'Laima',
  logConnections: true
});
