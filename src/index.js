const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
const port = process.env.PORT

// Define paths for templates
const publicDirectoryPath = path.join(__dirname, '../public')
const vuewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup hbs engine with templates
app.set('view engine', 'hbs')
app.set('views', vuewsPath)
hbs.registerPartials(partialPath)

// use public directory and json encoding
app.use(express.static(publicDirectoryPath))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {
        title: 'This is NodeJs with hbs engine template',
        name: 'Your name'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About',
        name: 'Your name'
    })
})


app.listen(port, () => console.log(`Example app listening on port port!`))