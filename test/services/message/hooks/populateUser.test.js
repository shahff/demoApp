'use strict';

const assert = require('assert');
const populateUser = require('../../../../src\services\message\hooks\populateUser.js');

describe('message populateUser hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    populateUser()(mockHook);

    assert.ok(mockHook.populateUser);
  });
});
