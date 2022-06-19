//Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app= express()
const port = 3000

//Static File
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))


//set template engine
app.use(expressLayouts)
app.set('layout', './layouts/main-layout.ejs')
app.set('view engine', 'ejs')

//Navigation
app.get('', (req, res) => {
    res.render('index')
})


//Listen on Port 3000
app.listen(port, () => console.log(`app listening on http://localhost:${port}`))