import ApplicationSerializer from './application';

const relationships = [
  'comments'
];

export default ApplicationSerializer.extend({
  include: relationships
});
