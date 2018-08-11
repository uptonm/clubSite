const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {user, pass} = require('./config/keys')
require('./models/header')
require('./models/user')
require('./models/newsletter')

mongoose.connect(`mongodb://${user}:${pass}@ds135421.mlab.com:35421/uptonm-sandbox`, {useNewUrlParser: true})

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./routes/headerRoutes')(app)
require('./routes/userRoutes')(app)
require('./routes/newsletterRoutes')(app)


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
