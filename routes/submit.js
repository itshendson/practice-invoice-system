const express = require('express');
const route = express.Router();

route.post('/:data', (req, res) => {
    let invoiceData = req.params.data.split(',');
    let invoiceProcessed = [];
    for (let i = 0; i < invoiceData.length; i++) {
        invoiceProcessed[i] = `${invoiceData[i]} is Processed`;
    }
    // Push to database
    res.json(invoiceProcessed);
})

module.exports = route;