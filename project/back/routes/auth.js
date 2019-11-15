const express=require('express');
const router=express.Router();
const passport=require('passport');
const token=require('../token');
require('dotenv').config();

const bcrypt=require('bcrypt');
const {isLoggedIn,isNotLoggedIn,verifyToken}=require('./middlewares');
const jwt = require('jsonwebtoken');

require('../passport/google');
require('../passport/facebook');
require('../passport/kakao');
require('../passport/jwt');

function generateToken(req, res) {
    const accessToken = token.generateAccessToken(req.user.dataValues.snsId);
    console.log("JWT token generated\n");
    res.redirect('http://localhost:3000/login?token='+accessToken);
 
}

router.get('/logout',isLoggedIn,(req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

router.get('/kakao',passport.authenticate('kakao',{session:false}));
router.get('/kakao/callback',passport.authenticate('kakao',{session:false,
    failureRedirect:'/',
}),generateToken);
router.get('/facebook', passport.authenticate('facebook',{session:false,scope:['email']}));
router.get('/facebook/callback',passport.authenticate('facebook',{session:false,
    failureRedirect:'/',
}),generateToken);
router.get('/google',passport.authenticate('google',{session:false,scope:['openid','profile','email']}));
router.get('/google/callback',passport.authenticate('google',{session:false}),generateToken);

module.exports=router;