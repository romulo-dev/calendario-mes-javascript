const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))
// configurando a template engine
app.set('view engine', 'ejs')


app.get("/", (req, res, next) => {
    res.render('pages/index')    
})

app.listen(5000, function() {
    console.log('Olá mundo')
})