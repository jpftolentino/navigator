exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', password: '123', handle: '123', favorites: '123'}),
        knex('users').insert({id: 2, name: 'Bob', password: '123', handle: '123', favorites: '123'}),
        knex('users').insert({id: 3, name: 'Charlie', password: '123', handle: '123', favorites: '123'})
      ]);
    });
};
