const express = require('express')
const route = express.Router()
const ctr = require('../controllers/userCtrl')


route.post('/register', ctr.register)
route.post('/login', ctr.login)


module.exports = route