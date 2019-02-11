import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  completed: DS.attr('boolean', { defaultValue: false }),

  createdAt: DS.attr('iso8601', {
    defaultValue() {
      return new Date();
    }
  }),

  comments: DS.hasMany('comment')
});
