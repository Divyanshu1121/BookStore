const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    language: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const book = mongoose.model('bookTbl', bookSchema)

module.exports = book;