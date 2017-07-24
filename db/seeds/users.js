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
            time:5
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
            title:'Become a programmer in 4 hours',
            time:240
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Play',
            title:'Flash Flash Revolution',
            time:30
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Watch',
            title:'Learn How to Play Draven',
            time:120
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Watch',
            title:'List of Ted my favourite ted talks',
            time:240
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Read',
            title:'Bloomberg: cut flight time in half',
            time:30
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Watch',
            title:'Friends funny clips',
            time:10
          }),

        knex('list')
          .returning('list_id')
          .insert({
            fk_users_id: 1,
            category: 'Play',
            title:'How to oragami',
            time:10
          }),
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TASK ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 1,
            description: 'Do 10 pushups',
            url: 'www.youtube.com/watch?v=XIHO5t_VBPQ'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 1,
            description: 'Do 10 pull ups',
            url: 'www.youtube.com/watch?v=-phbNTs-SwU'
          }),


        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 2,
            description: 'Juon 2',
            url: 'www.images-na.ssl-images-amazon.com/images/M/MV5BN2Y2OWJkYWMtNjczMS00NjEwLWIwMjUtYzJlMjQwMGM3NmVjXkEyXkFqcGdeQXVyNTk5MjgxNTg@._V1_SY1000_CR0,0,1435,1000_AL_.jpg'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 2,
            description: 'Paranormal Activity',
            url: 'http://www.imdb.com/title/tt1179904/'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 3,
            description: 'Read the javascript book',
            url: 'http://eloquentjavascript.net/Eloquent_JavaScript.pdf'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 3,
            description: 'Learn HTML/CSS',
            url: 'w3schools.com/html/html_css.asp'
          }),
        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 4,
            description: 'DDR on the PC',
            url: 'http://www.flashflashrevolution.com/'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 5,
            description: 'Tyler 1 beasting on draven',
            url: 'www.youtube.com/watch?v=P48abml48JM'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 6,
            description: '10 ways to have a better conversation',
            url: 'www.youtube.com/watch?v=R1vskiVDwl4'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 7,
            description: 'Cut your flights in half',
            url: 'www.bloomberg.com/news/articles/2017-07-24/nasa-has-a-way-to-cut-your-flight-time-in-half'
          }),
        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 8,
            description: 'This clip is so jokes',
            url: 'www.youtube.com/watch?v=8TB400szk2A'
          }),

        knex('task')
          .returning('task_id')
          .insert({
            fk_list_id: 9,
            description: 'Sick site for oragami',
            url: 'www.origami-instructions.com/'
          }),
      ]);
    });
};
