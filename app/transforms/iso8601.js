import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (typeof serialized === 'undefined') {
      return null;
    }

    // Strip the milliseconds from the string.
    return new Date(serialized).toISOString().split('.').shift() + 'Z';
  },

  serialize(deserialized) {
    if (typeof deserialized === 'undefined') {
      return null;
    }

    return Date.parse(deserialized);
  }
});
