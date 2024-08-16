// seeds/01_local_list_seed.js

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('localList').del() // Ensure the correct table name
      .then(function () {
        // Inserts seed entries
        return knex('localList').insert([
          { id: 1, name: 'القائمة الوطنية', count: 100, circle_id: 1 },
          { id: 2, name: 'قائمة عمان', count: 150, circle_id: 2 },
          { id: 3, name: 'قائمة الزرقاء', count: 120, circle_id: 3 },
          { id: 4, name: 'قائمة إربد', count: 110, circle_id: 4 },
          { id: 5, name: 'قائمة الكرك', count: 130, circle_id: 4  },
          { id: 6, name: 'قائمة مادبا', count: 140, circle_id: 4 },
        ]);
      });
  };
  