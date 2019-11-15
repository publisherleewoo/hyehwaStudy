const passport = require('passport');
const Facebook=require('passport-facebook').Strategy;
const {User}=require('../model');

passport.use(new Facebook({
    clientID:process.env.FACEBOOK_ID,
    clientSecret:process.env.FACEBOOK_SECRET,
    callbackURL:process.env.FACEBOOK_CALLBACK,
    profileFields: ['id', 'emails', 'name','picture']
},async (accessToken,refreshToken,profile,done)=>{
    try{
        console.log("응답: ",profile);
        const exUser=await User.findOne({where:{snsId:profile.id,provider:'facebook'}});
        if(exUser) return done(null,exUser);//done 호출시 req.user에 profile저장됨.
        else{
            const newUser=await User.create({
                email:profile.emails && profile.emails[0].value,
                nick:profile.name.familyName +' '+ profile.name.givenName,
                snsId:profile.id,
                frontimg:profile.photos[0].value,
                provider:'facebook'
            });
            return done(null,newUser);
        };
    }catch(error){console.error(error);return done(error);}
}));
 // 응답 형식
 // { id: '...',
 //  username: undefined,
 //  displayName: undefined,
 //  name: { familyName: '', givenName: '', middleName: undefined },
 //  gender: undefined,
 //  profileUrl: undefined,
 //  emails: [ { value: '@naver.com' } ],
 //  photos:
 //   [ { value:
 //        'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3115670131836793&height=50&width=50&ext=1575614404&hash=AeS0MsIEwueTR1id' } ],

 //  provider: 'facebook',
 //  _raw:
 //   '{"id":"","email":"googlenomics\\u0040naver.com","last_name":"\\uc815","first_name":"\\uc131\\ubb38"}',
 //  _json:
 //   { id: '',
 //     email: 'ㅏ@naver.com',
 //     last_name: '',
 //     first_name: '' } }
