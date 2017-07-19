
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('list', function (table) {
      table.increments('list_id');
      table.string('fk_user_id');
      // table.foreign('fk_user_id').references('user.user_id');
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
