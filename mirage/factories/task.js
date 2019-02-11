import { Factory, faker } from 'ember-cli-mirage';
import { pluralize } from 'ember-inflector';

export default Factory.extend({
  title() {
    return `${faker.hacker.verb().capitalize()} ${faker.random.number({ min: 2, max: 10 })} ${pluralize(faker.commerce.productName())}`;
  },

  completed: false,
  createdAt: Date // This will be invoked internally
});
