const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: String,
    due: String,
    added_timestamp: String
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;