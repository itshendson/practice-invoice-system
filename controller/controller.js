const Itemdb = require('../models/item');

// create and save new item
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty."});
        return;
    }

    // new item
    const item = new Itemdb({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        item: req.body.item,
        price: req.body.price
    })

    // save item to database
    item
        .save(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while attempting to create item."
            });
        })
}

// retrieve and return all item(s)
exports.find = (req, res) => {
    Itemdb.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "An error occurred while attempting to retrieve item."
        })
    })
}

// Delete an item by Item ID
exports.delete = (req, res) => {
    // Implement this.
}

