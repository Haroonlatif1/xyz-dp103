const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "invalid"
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: String,
        default: "500",
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
