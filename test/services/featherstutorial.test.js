const assert = require('assert');
const app = require('../../src/app');

describe('\'featherstutorial\' service', () => {
  it('registered the service', () => {
    const service = app.service('featherstutorial');

    assert.ok(service, 'Registered the service');
  });
});
