const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const { user, pass, cookieKey } = require('./config/keys')
require('./models/header')
require('./models/user')
require('./models/newsletter')
require('./services/passport')

mongoose.connect(`mongodb://${user}:${pass}@ds135421.mlab.com:35421/uptonm-sandbox`, {useNewUrlParser: true})

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(
    cookieSession({
      maxDays: 30 * 24 * 60 * 60 * 1000,
      keys: [cookieKey]
    })
  )
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app); // Calls routes for oAuth
require('./routes/headerRoutes')(app)
require('./routes/userRoutes')(app)
require('./routes/newsletterRoutes')(app)


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
