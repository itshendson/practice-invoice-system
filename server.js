require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

/**
 * Server setup
 */
const app = express();
app.use(express.json());
app.use(cors());

/**
 * Load endpoints
 */
app.use('/submit', require('./routes/submit.js'));

/**
 * Listen
 */
app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})