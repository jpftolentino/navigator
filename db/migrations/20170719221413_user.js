
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', function (table) {
      table.increments('Id');
      table.string('name');
      table.string('password');
      table.string('handle');
      table.string('favorites');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user')
  ])
};
