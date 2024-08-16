const express = require('express');
const cors = require('cors');
require('dotenv').config();

const localListsRoutes = require('./routes/localListsRoutes');
const partyListsRoutes = require('./routes/partyListsRoutes');
const circlesRoutes = require('./routes/circlesRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/local-lists', localListsRoutes);
app.use('/api/party-lists', partyListsRoutes);
app.use('/api/circles', circlesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
