const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT =  require('passport-jwt').ExtractJwt;

const User = require('./models/user');

var opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'secret'
}


passport.use(new JWTStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ id: jwt_payload.sub });
      
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log('Error in finding the User from JWT');
      return done(err, false);
    }
  }));


  module.exports = passport;