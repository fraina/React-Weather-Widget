var webpack = require("webpack");
module.exports = function(config) {
  config.set({

    files: [
      // all files ending in "test"
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['mocha'],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      'test/**/*.js': ['webpack']
    },

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'build/coverage/',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'text-summary'}
      ]
    },

    webpack: {
      // webpack configuration
      module: {
        loaders: [
          {test: /\.js$/, loader: "babel"}
        ],
        postLoaders: [{
          test: /\.js/,
          exclude: /(test|node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    browsers: ['PhantomJS']
  });
};
