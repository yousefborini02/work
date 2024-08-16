exports.up = function(knex) {
    return knex.schema.createTable('localList', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('count').defaultTo(0);
      table
        .integer('circle_id')
        .unsigned()
        .references('circle_id')
        .inTable('Circles')
        .onDelete('CASCADE')
        .notNullable(); // Relate to Circles table
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('localList');
  };
  