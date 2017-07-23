exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ USER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        knex('users')
          .returning('id')
          .insert({
            name: 'Captain Jack Sparrow',
            password: 'piratelife',
            handle: '@BlackPearl',
            email: 'jacksparrow@pearl.ca'
          }),

        knex('users')
          .returning('id')
          .insert({
            name: 'Tony Stark',
            password: 'ironman',
            handle: '@MarkIV',
            email: 'stark@enterprise.me'
          }),

         knex('users')
          .returning('id')
          .insert({
            name: 'Bruce Banner',
            password: 'betty',
            handle: '@Hulk',
            email:'greenscientist@lab.ca'
          }),

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LIST ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Play',
            title:'30 Minute Get Jacked Work Out',
            time:30
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Watch',
            title:'Pure Horror',
            time:120
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Read',
            title:'How to get a girlfriend in 4 hours',
            time:240
          }),

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TASK ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 1,
            description: 'Do 10 pushups',
            url: 'www.google.ca'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 1,
            description: 'Do 10 jumping jacks',
            url: 'www.google.ca'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 2,
            description: 'Juon 2',
            url: 'www.google.ca'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 2,
            description: 'Paranormal Activity',
            url: 'www.google.ca'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 3,
            description: 'Read the Game',
            url: 'www.google.ca'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 3,
            description: 'Go to a bar',
            url: 'www.google.ca'
          }),
      ]);
    });
};
