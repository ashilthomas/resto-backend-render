const express = require('express')
const app = express()
const userRouters = require('./userRouters')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const restauratRouters = require("./restaurantRouters")

app.use(cors({
  credentials:true,
  origin:true
}))

app.use(express.static('upload'))
app.use(cookieParser())
app.use(express.json())
app.use('/upload',express.static(__dirname +'/upload'))
app.use(express.urlencoded({ extended: true }));


app.use('/api',userRouters)
app.use('/',restauratRouters)


module.exports = app






