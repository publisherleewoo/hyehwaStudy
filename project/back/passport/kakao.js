const passport = require('passport');
const Kakao=require('passport-kakao').Strategy;
const {User}=require('../model');
module.exports=(passport)=>{
    passport.use(new Kakao({
        clientID:process.env.KAKAO_ID,
        callbackURL:'/auth/kakao/callback',
    },async (accessToken,refreshToken,profile,done)=>{
        try{
                    console.log("응답: ",profile);

            const exUser=await User.findOne({where:{snsId:profile.id,provider:'kakao'}});
            if(exUser) return done(null,exUser);
            else{
                const newUser=await User.create({
                    email:profile._json && profile._json.kaccount_email,
                    nick:profile.displayName,
                    snsId:profile.id,
                    provider:'kakao'
                });
                return done(null,newUser);
            };
        }catch(error){console.error(error);return done(error);}
    }));
};