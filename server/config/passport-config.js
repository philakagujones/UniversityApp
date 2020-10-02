const LocalStrategy = require('passport-local').Strategy

function initializePassport(passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}))
}