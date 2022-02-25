require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('the home route is working now!');
})

app.post('/server/:data', (req, res) => {
    let invoiceData = req.params.data.split(',');
    let invoiceProcessed = [];
    for (let i = 0; i < invoiceData.length; i++) {
        invoiceProcessed[i] = `${invoiceData[i]} is Processed`;
    }
    // Push to database
    res.json(invoiceProcessed);
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})