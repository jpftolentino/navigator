
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('list', function (table) {
      table.integer('fk_users_id');
      table.foreign('fk_users_id').references('users.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('list', function (table) {
      table.dropColumn('fk_users_id')
    })
  ])
};
