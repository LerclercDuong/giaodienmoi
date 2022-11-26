const express = require('express')
const app = express()
const port =  3000
const db = require('./src/config/db/db')
const route = require('./src/routes/index')
var bodyParser = require('body-parser')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')


// import db from './src/config/db/db'
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'src/resources/view'))
app.use(expressLayouts)
app.set('layout', path.join(__dirname, 'src/resources/view/layouts'))
// parse application/json
app.use(bodyParser.json())
db.connect()

route(app)
// console.log(process.env.PORT)
app.listen( port)