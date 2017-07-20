
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('list', function (table) {
      table.increments('list_id');
      table.integer('fk_users_id');
      table.foreign('fk_users_id').references('users.id');
      table.string('title');
      table.string('category');
      table.integer('time');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('list')
  ])
};
