const express = require('express');
const port = 8081;
const bodyParser = require('body-parser');
const db = require('./config/database');
const bookSchema = require('./models/bookSchema')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('node_modules'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    bookSchema.find({}).then((data) => {
        return res.render('index', {
            data
        })
    }).catch((err) => {
        return false
    })
})

app.post('/insertData', (req, res) => {
    let editId = req.body.editId

    if (editId) {
        bookSchema.findByIdAndUpdate(editId, { ...req.body }).then((data) => {
            console.log("Book Data Updated")
            return res.redirect('/')
        }).catch((err) => {
            console.log(err)
            return false
        })
    }
    else {
        bookSchema.create({ ...req.body }).then((data) => {
            return res.redirect('/')
        }).catch((err) => {
            console.log(err)
            return false
        })
    }
})


app.get('/deleteData/:id', (req, res) => {
    let { id } = req.params
    bookSchema.findByIdAndDelete(id).then((data) => {
        console.log(data)
        console.log("Book Data Deleted...")
        return res.redirect('/')
    }).catch((err) => {
        console.log('Error...')
        return false
    })
})

app.get('/editData/:id', (req, res) => {
    let { id } = req.params
    bookSchema.findById(id).then((data) => {
        return res.render('edit', {
            data
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (!err) {
        console.log("Server Started on \nhttp://localhost:" + port);
    }
})




