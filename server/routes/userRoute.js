const express = require('express')
const route = express.Router()
const userroute = require('./userRoute')

route.use('/user', userroute)


module.exports = route