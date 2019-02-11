import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.lorem.paragraph();
  },

  author() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  createdAt() {
    return faker.date.past();
  }
});
