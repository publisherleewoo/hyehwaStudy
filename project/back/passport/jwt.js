const passport = require('passport');
const passportJwt = require('passport-jwt');
const User = require('../model/user');

const opts={}
opts.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.issuer = 'hyehwa';
opts.audience = 'public';
console.log(opts);
passport.use(new passportJwt.Strategy(opts, (payload, done) => {
    console.log(payload)
    User.findOne({snsId:parseInt(payload.sub)}).then((user)=>{
        if (user) {
            return done(null, user, payload);
        }
        return done();
    })

}));