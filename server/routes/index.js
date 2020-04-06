const express = require('express')
const route = express.Router()
const userroute = require('./userRoute')
const foodroute = require('./foodRoute')

route.use('/', userroute)
route.use('/foods', foodroute)


module.exports = route