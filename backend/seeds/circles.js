exports.seed = function(knex) {
    return knex('Circles').del()
      .then(function () {
        return knex('Circles').insert([
          { circle_id: 1, name: 'عمان الاولى', city: 'عمان', numOfCandidat: 0, count: 0 },
          { circle_id: 2, name: 'عمان الثانية', city: 'عمان', numOfCandidat: 0, count: 0 },
          { circle_id: 3, name: 'عمان الثالثة', city: 'عمان', numOfCandidat: 0, count: 0 },
          { circle_id: 4, name: 'الزرقاء', city: 'الزرقاء', numOfCandidat: 0, count: 0 }
        ]);
      });
  };
  