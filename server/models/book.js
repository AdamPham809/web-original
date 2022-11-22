let mongoose = require('mongoose');
// create a book model
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
    },
    {
        collections: "books"
    }
);
module.exports = mongoose.model('Book', bookModel);