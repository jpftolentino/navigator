
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('task', function(table) {
      table.string('url');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('task', function(table) {
      table.dropColumn('url');
    })
  ])
};
