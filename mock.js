'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var routes = require('./api.js');

server.set('port', (process.env.PORT || 3000));
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}));

server.use('/', routes);
server.listen(3000, function() {
  console.log('Mock server is running at http://localhost:' + server.get('port'));
});
