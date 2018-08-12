const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: `/auth/google/callback`, // This is the route the user takes after OAuth from Google
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) { // We already have a record with the given profile id
        //console.log('We already have a user with this id'); //Test
        return done(null, existingUser)
      } // We don't have a user record with this id, make a new record
      // if(profile._json.domain !== 'wit.edu') { //Is on wit domain?
      //     console.log('ran', profile._json.domain)
      //     return done(null, false)
      // }
      else {
            const user = await new User({
                first: profile.name.givenName,
                last: profile.name.familyName,
                email: profile.emails[0].value,
                googleId: profile.id 
            }).save()
            done(null, user)
        }
    }
  )
)

// first = response.name.givenName
// last = response.name.familyName
// email = response.emails