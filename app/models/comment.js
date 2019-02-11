import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),

  createdAt: DS.attr('iso8601', {
    defaultValue() {
      return new Date();
    }
  })
});
