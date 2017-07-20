exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Captain Jack Sparrow', password: 'piratelife', handle: '@BlackPearl', email: 'jacksparrow@pearl.ca'}),
        knex('users').insert({id: 2, name: 'Tony Stark', password: 'ironman', handle: '@MarkIV', email:'stark@enterprise.me'}),
        knex('users').insert({id: 3, name: 'Bruce Banner', password: 'betty', handle: '@Hulk', email:'greenscientist@lab.ca'}),

        knex('list').insert({list_id: 1, fk_users_id: 1, category: 'Play', title:'30 Minute Get Jacked Work Out', time:30}),
        knex('list').insert({list_id: 2, fk_users_id: 1, category: 'Watch', title:'Pure Horror', time:120 }),
        knex('list').insert({list_id: 3, fk_users_id: 1, category: 'Read', title:'How to get a girl in 4 hours', time:240}),

        knex('task').insert({task_id: 1, fk_list_id: 1, description: 'Do 10 pushups'}),
        knex('task').insert({task_id: 2, fk_list_id: 1, description: 'Do 10 jumping jacks'}),
        knex('task').insert({task_id: 3, fk_list_id: 2, description: 'Juon 2'}),
        knex('task').insert({task_id: 4, fk_list_id: 2, description: 'Paranormal Activity'}),
        knex('task').insert({task_id: 5, fk_list_id: 3, description: 'Read the Game'}),
        knex('task').insert({task_id: 6, fk_list_id: 3, description: 'Go to a bar'})
      ]);
    });
};
