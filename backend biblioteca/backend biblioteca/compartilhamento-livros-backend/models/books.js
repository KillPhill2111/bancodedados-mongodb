const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    cover: String,
    summary: String,
    downloadLink: String
});

module.exports = mongoose.model('Book', bookSchema);
