import Component from '@ember/component';
import { computed, set } from '@ember/object';

export default Component.extend({
  tagName: 'section',
  elementId: 'main',
  canToggle: true,

  allCompleted: computed('tasks.@each.completed', function() {
    return this.tasks.isEvery('completed');
  }).readOnly(),

  actions: {
    enableToggle() {
      set(this, 'canToggle', true);
    },

    disableToggle() {
      set(this, 'canToggle', false);
    },

    toggleAll() {
      const allCompleted = this.allCompleted;

      this.tasks.forEach(task => {
        set(task, 'completed', !allCompleted);
        task.save();
      });
    }
  }
});
