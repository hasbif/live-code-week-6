const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const route = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', route)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))