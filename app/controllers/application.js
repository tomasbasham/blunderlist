import Controller from '@ember/controller';

import { get } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { inject } from '@ember/service';
import { isBlank } from '@ember/utils';

export default Controller.extend({
  store: inject(),

  remaining: filterBy('model', 'completed', false),
  completed: filterBy('model', 'completed', true),

  actions: {
    createTask(e) {
      if (e.keyCode === 13 && !isBlank(e.target.value)) {
        const store = get(this, 'store');

        const task = store.createRecord('task', { title: e.target.value });
        task.save();

        e.target.value = '';
      }
    },

    clearCompleted() {
      const completed = get(this, 'completed');

      completed.forEach(task => {
        task.deleteRecord()
        task.save();
      });
    }
  }
});
