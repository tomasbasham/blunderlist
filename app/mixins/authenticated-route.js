import Mixin from '@ember/object/mixin';

import { getOwner } from '@ember/application';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Mixin.create({
  session: inject(),

  beforeModel(transition) {
    const didRedirect = checkAuthentication(getOwner(this), transition, this.triggerAuthentication);
    if (!didRedirect) {
      return this._super(...arguments);
    }
  },

  triggerAuthentication() {
    const authenticationRoute = get(this, 'session.authenticationRoute');
    assert('The route cannot transition to itself. This will cause an infinate route', get(this, 'rountName') !== authenticationRoute);

    this.transitionTo(authenticationRoute);
  }
});
