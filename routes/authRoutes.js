const passport = require('passport')

module.exports = (app) => { // User attempts to login, begin the oAuth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get(
    '/auth/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login-failure'
    })
  )
  

  app.get('/api/current_user', (req, res) => {
    if(req.user) { // Does user exist?/ are they logged in?
      res.send(req.user);
    } else {
      res.send('');
    }
  })
  
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/'); // User logs out, bring them back to the home page
  })  
}