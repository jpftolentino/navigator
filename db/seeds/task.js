exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({task_id: 1, description: 'Do 10 pushups'}),
        knex('users').insert({task_id: 2, description: 'Watch this video'}),
        knex('users').insert({task_id: 3, description: 'clean the bathroom'})
      ]);
    });
};
