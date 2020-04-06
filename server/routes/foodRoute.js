const express = require('express')
const route = express.Router()


route.use('/user', userroute)


module.exports = route