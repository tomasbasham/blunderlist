import { providerState } from 'ember-cli-pact';

providerState('a task exists', (server, task) => {
  server.create('task', task);
});
