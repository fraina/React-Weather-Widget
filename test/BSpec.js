var assert = require('assert');
var B = require('../src/js/B');

describe('B', function() {
  describe('#Sample.urlRoot', function () {
    it('should return /api/qwerty', function () {
      assert.equal('/api/qwerty', B.Sample.urlRoot);
    });
  });
});
