const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    quality: String,
    userId: String,
    company: String,
    imgURL: String
});

module.exports = mongoose.model('products', productSchema);