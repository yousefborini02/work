exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('Users').del()
      .then(function () {
        // Inserts seed entries
        return knex('Users').insert([
          {
            N_Id: 'N001',
            name: 'أحمد محمد',
            email: 'ahmed.mohamed@example.com',
            gender: 'Male',
            age: 30,
            city: 'عمان',
            religion: 'الإسلام',
            polling_address: 'شارع الملك عبد الله الثاني، عمان',
            isOrganizer: false,
            circle_id: 1 // Assuming 1 corresponds to a circle in the Circles table
          },
          {
            N_Id: 'N002',
            name: 'فاطمة الزهراء',
            email: 'fatima.zahra@example.com',
            gender: 'Female',
            age: 28,
            city: 'الزرقاء',
            religion: 'الإسلام',
            polling_address: 'شارع الحسن، الزرقاء',
            isOrganizer: true,
            circle_id: 2 // Assuming 2 corresponds to a circle in the Circles table
          },
          {
            N_Id: 'N003',
            name: 'يوسف عبد الله',
            email: 'yousef.abdullah@example.com',
            gender: 'Male',
            age: 35,
            city: 'إربد',
            religion: 'المسيحية',
            polling_address: 'شارع الخليل، إربد',
            isOrganizer: false,
            circle_id: 3 // Assuming 3 corresponds to a circle in the Circles table
          },
          {
            N_Id: 'N004',
            name: 'سعاد علي',
            email: 'suaad.ali@example.com',
            gender: 'Female',
            age: 22,
            city: 'عمان',
            religion: 'الإسلام',
            polling_address: 'شارع المدينة، عمان',
            isOrganizer: false,
            circle_id: 1 // Assuming 1 corresponds to a circle in the Circles table
          },
          {
            N_Id: 'N005',
            name: 'سليمان ناصر',
            email: 'suleiman.nasser@example.com',
            gender: 'Male',
            age: 40,
            city: 'السلط',
            religion: 'الإسلام',
            polling_address: 'شارع الرشيد، السلط',
            isOrganizer: true,
            circle_id: 4 // Assuming 4 corresponds to a circle in the Circles table
          }
        ]);
      });
  };
  