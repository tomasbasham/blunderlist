import Route from '@ember/routing/route';

import { get } from '@ember/object';
import { inject } from '@ember/service';

import AuthenticatedRouteMixin from 'blunderlist/mixins/authenticated-route';

export default Route.extend(AuthenticatedRouteMixin, {
  store: inject(),

  model() {
    return get(this, 'store').findAll('task').catch(() => {
      return [];
    });
  }
});
