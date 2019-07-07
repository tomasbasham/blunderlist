import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupPact, given, interaction } from 'ember-cli-pact';

// 🎂 Happy Birthday to me 🎁
const createdAt = '1990-10-26T20:00:00Z'

module('Pact | tasks', function(hooks) {
  setupTest(hooks);
  setupPact(hooks, {
    providerName: 'blunderlist-gateway'
  });

  test('a task is returned from the server', async function(assert) {
    given('a task exists', { id: 1, title: 'hello', createdAt });

    let tasks = await interaction(() => this.store().findAll('task'));
    let task = tasks.get('firstObject');

    assert.equal(task.get('id'), 1);
    assert.equal(task.get('title'), 'hello');
    assert.equal(task.get('completed'), false);

    // Dates must be compared with deepEqual becuase it considers all own and
    // inherited properties.
    assert.deepEqual(task.get('createdAt'), createdAt);
  });
});
