const express = require('express');
const router = express.Router();
const passport = require('passport');

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');
const auth=require('./auth');
const files = require('./files');

const {User} = require('../model');

/* Main */
// router.get('/', passport.authenticate('jwt', { session: false }),function(req, res, next) {
//   res.render('index', { title: 'Hyehwastudy' });
// });
// router.get('/login',(req,res,next)=>{
//   res.render('login');
// });

// routers
router.use('/user', users);
router.use('/post', posts);
router.use('/comment', comments);
router.use('/auth',auth);
router.use('/file', files);

module.exports = router;
