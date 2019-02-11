import Component from '@ember/component';

import { set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { inject } from '@ember/service';
import { isBlank } from '@ember/utils';

export default Component.extend({
  store: inject(),

  tagName: 'li',
  editing: false,
  classNameBindings: ['task.completed', 'editing'],

  focusInput() {
    this.element.querySelector('input.edit').focus();
  },

  actions: {
    startEditing() {
      this.onStartEdit();

      set(this, 'editing', true);
      scheduleOnce('afterRender', this, 'focusInput');
    },

    doneEditing(taskTitle) {
      if (!this.editing) {
        return;
      }

      if (isBlank(taskTitle)) {
        this.send('removeTask');
        return;
      }

      set(this, 'task.title', taskTitle.trim());
      set(this, 'editing', false);

      this.task.save();
      this.onEndEdit();
    },

    handleKeydown(e) {
      switch(e.keyCode) {
        case 13: // Return key
        e.target.blur();
        break;
      case 27:
        set(this, 'editing', false);
      }
    },

    toggleCompleted(e) {
      set(this.task, 'completed', e.target.checked);
      this.task.save();
    },

    remove() {
      this.task.deleteRecord();
      this.task.save();
    },
  }
});
