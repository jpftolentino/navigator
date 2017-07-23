
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('task', function (table) {
      table.increments('task_id');
      table.integer('fk_list_id');
      table.foreign('fk_list_id').references('list.list_id');
      table.string('description');
      table.string('url');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('task')
  ])
};
