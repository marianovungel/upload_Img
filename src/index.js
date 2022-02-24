require('dotenv').config()
const express=require('express')
const app=express()
const mongoose = require('mongoose')
const morgan=require('morgan')
const RouterUpload = require('./routes.js')
mongoose.connect(process.env.URL_MONGDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", RouterUpload)

const PORT=process.env.PORT
app.listen(PORT, console.log(PORT))
