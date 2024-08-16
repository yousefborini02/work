const knex = require('../knex_config'); // Import your knex instance

// Controller function to get all party lists
exports.getAllPartyLists = async (req, res) => {
  try {
    const partyLists = await knex('party_lists').select('*'); // Adjust table name and columns as needed
    res.json(partyLists);
  } catch (error) {
    console.error('Error fetching party lists:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
