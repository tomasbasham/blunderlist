import { JSONAPISerializer } from 'ember-cli-mirage';
import { PactEnabled } from 'ember-cli-pact/mock-provider/mirage';

export default PactEnabled(JSONAPISerializer).extend({
});
