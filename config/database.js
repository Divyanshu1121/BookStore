const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://divu11480:1234@book-data.y5atf.mongodb.net/');

const db = mongoose.connection

db.on('connected', (err) => {
    if (!err) {
        console.log("Database Connected");
    }
})

module.exports = db;