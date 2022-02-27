require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const PORT = process.env.PORT || 5000;

/**
 * Server Setup
 */
const app = express();
app.use(express.json());
app.use(cors());

/**
 * Connect Database
 */
connectDatabase();


/**
 * Load Endpoints
 */
app.use('/submit', require('./routes/submit.js'));

/**
 * Listen on Port
 */
app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})