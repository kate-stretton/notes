exports.up = function (knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments('id')
    table.string('text')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('notes')
}
