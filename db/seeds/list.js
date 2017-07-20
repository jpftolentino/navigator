exports.seed = function(knex, Promise) {
  return knex('list').del()
    .then(function () {
      return Promise.all([
        knex('list').insert({list_id: 1, category: '123', time: 123}),
        knex('list').insert({list_id: 2, category: '123', time: 123}),
        knex('list').insert({list_id: 3, category: '123', time: 123})
      ]);
    });
};
