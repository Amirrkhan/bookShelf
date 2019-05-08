const mongoose = require('mongoose');


const book_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    reviews: {
        type: String,
        default: 'n/a'
    },
    pages:{
        type: String,
        default: 'n/a'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    price: {
        type: String,
        default: 'n/a'
    },
    ownerId: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Book = mongoose.model('Book', book_schema);

module.exports = {Book}
