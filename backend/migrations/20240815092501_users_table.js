exports.up = function(knex) {
    return knex.schema.createTable('Users', function(table) {
      table.string('N_Id').primary();
      table.string('name');
      table.string('email').unique();
      table.enum('gender', ['Male', 'Female', 'Other']);
      table.integer('age');
      table.string('city');
      table.string('religion');
      table.string('polling_address');
      table.boolean('isOrganizer').defaultTo(false);
      
      // Foreign Key to Circles table
      table.integer('circle_id').unsigned().references('circle_id').inTable('Circles').onDelete('SET NULL');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Users');
  };
  