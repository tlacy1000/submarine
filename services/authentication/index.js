var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

const exampleUser = {
  name: 'Lacy',
  username: 'tlacy1000',
  role: 'admin',
};

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(id, done) {
  if (exampleUser.username === id) {
    return done(null, exampleUser);
  } else {
    return done(new Error('User not found when trying to deserializeUser'));
  }
});

passport.use(new LocalStrategy({usernameField: 'username', passwordField: 'password'}, (username, password, done) => {
  console.log(username, password);
  if (username === 'tlacy1000') {
    // Authentication succeeded, pass user to the callback
    return done(null, exampleUser);
  } else {
    return done(new Error('Invalid username or password, please try again.'));
  }
}));
