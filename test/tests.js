var assert = require("assert"); // node.js core module

var _ = require('lodash');
var flattenJSON = require('../cron/utils').flattenJSON;
var payload = require('./fixtures/payload_grouped');

describe('Utils', function() {
  describe('#flattenJSON()', function() {
    before(function(){
      assert.equal(4, payload.length);
    });
    it('should flatten array chunks into one object', function() {
      // assert.notEqual(4, _.flatten(payload).length);
      // assert.equal(35, _.flatten(payload).length);
      assert.notEqual(4, flattenJSON(payload).length);
      assert.equal(35, flattenJSON(payload).length);
    });
  })
});