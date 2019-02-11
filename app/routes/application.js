import Route from '@ember/routing/route';

import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Route.extend({
  store: inject(),

  model() {
    return get(this, 'store').findAll('task').catch(() => {
      return [];
    });
  }
});
