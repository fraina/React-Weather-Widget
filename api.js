'use strict';

var mock = require('mockjs');
var express = require('express');
var router = express.Router();

router.get('/user/:id', function(req, res) {
  res.json(req.params);
});

router.get('/hello', function(req, res) {
  res.json({
    name: 'Lance'
  });
});

router.get('/data', function(req, res) {
  var random = mock.Random;
  var data = {
    boolean: random.boolean(),
    integer: random.integer(1, 9527),
    float: random.float(1, 200, 0, 99),
    string: random.string(7, 10),
    range: random.range(1, 78, 5)
  };

  res.json(data);
});

module.exports = router;
