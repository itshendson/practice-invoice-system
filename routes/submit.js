const express = require('express');
const route = express.Router();

const controller = require('../controller/controller');

route.post('/:data', (req, res) => {
    let invoiceData = req.params.data.split(',');
    let invoiceProcessed = [];
    for (let i = 0; i < invoiceData.length; i++) {
        invoiceProcessed[i] = `${invoiceData[i]} is Processed`;
    }
    // Push to database
    res.json(invoiceProcessed);
})

route.post('/api/items', controller.create);

module.exports = route;