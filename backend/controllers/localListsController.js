const knex = require('../knex_config');

// Controller function to get local lists by circle_id
exports.getAllLocalLists = async (req, res) => {
  const { circle_id } = req.query; // Get circle_id from query parameters

  try {
    let query = knex('localList')
      .select('localList.id', 'localList.name', 'localList.count', 'circles.name as circle_name')
      .leftJoin('circles', 'localList.circle_id', 'circles.circle_id');

    // Filter by circle_id if provided
    if (circle_id) {
      query = query.where('localList.circle_id', circle_id);
    }

    const localLists = await query;

    res.json(localLists);
  } catch (error) {
    console.error('Error fetching local lists:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
