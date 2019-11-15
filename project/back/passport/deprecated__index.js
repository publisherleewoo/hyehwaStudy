const facebook=require('./facebook');
const kakao=require('./kakao');
const google=require('./google');
const {User}=require('../models');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.issuer = 'localhost:8001';
opts.audience = 'localhost:8001';

module.exports= (passport)=>{
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.sub}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
    facebook(passport);
    kakao(passport);
    google(passport);


};