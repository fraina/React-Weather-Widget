var assert = require('assert');
var A = require('../src/js/A');

describe('A', function() {
  describe('#Sample.urlRoot', function () {
    it('should return /api/samples', function () {
      assert.equal('/api/samples', A.Sample.urlRoot);
    });
  });
});
