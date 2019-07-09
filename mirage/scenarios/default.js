export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.createList('task', 5).forEach(task => {
    server.createList('comment', 3, { task });
  });
}
