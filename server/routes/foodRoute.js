const express = require('express')
const route = express.Router()
const foods = require('../controllers/foodCtrl')
const { authenticate, autherize } = require('../middlewares/OA')

route.use(authenticate)
route.post('/', foods.add)
//route.use('/user', userroute)


module.exports = route