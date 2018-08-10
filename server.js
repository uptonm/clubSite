const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = process.env.PORT || 8000

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./routes')(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
