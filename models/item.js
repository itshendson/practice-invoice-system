const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Itemdb = mongoose.model('Item', ItemSchema);

module.exports = Itemdb;