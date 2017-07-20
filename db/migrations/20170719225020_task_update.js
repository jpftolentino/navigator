
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('task', function (table) {
      table.integer('fk_list_id');
      table.foreign('fk_list_id').references('list.list_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('task', function (table) {
      table.dropColumn('fk_list_id')
    })
  ])
};
