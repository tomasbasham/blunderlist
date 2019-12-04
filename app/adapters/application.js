import DS from 'ember-data';
import config from '../config/environment';

import { inject } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
  session: inject(),

  host: config.host,
  namespace: config.namespace,

  // Attach JWT to headers on change to session.
});
