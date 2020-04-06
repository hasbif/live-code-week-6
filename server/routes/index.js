const express = require('express')
const route = express.Router()
const userroute = require('./userRoute')
const foodroute = require('./foodRoute')

route.use('/user', userroute)
route.use('/food', foodroute)


module.exports = route