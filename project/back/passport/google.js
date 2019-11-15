const passport = require('passport');
const google=require('passport-google-oauth20').Strategy;
const {User}=require('../model');

passport.use(new google({
    clientID:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK,
},async (accessToken,refreshToken,profile,done)=>{
    try{
        console.log("응답: ",profile);
        const exUser=await User.findOne({where:{snsId:profile.id,provider:'google'}});
        if(exUser) return done(null,exUser);
        else{
            const newUser=await User.create({
                email:profile.emails && profile.emails[0].value,
                nick:profile.displayName,
                snsId:profile.id,
                frontimg:profile.photos[0].value,
                provider:'google'
            });
            return done(null,newUser);
        };
    }catch(error){console.error(error);return done(error);}
}));
