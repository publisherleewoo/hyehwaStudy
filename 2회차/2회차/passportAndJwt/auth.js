const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../passport/checklogin');

// routers
const router = express.Router(); // INDEX ROUTER

router.get('/', verifyToken, function(req,res,next) {
    console.log("Immideate logined");
});

// local login
router.post('/login', function(req,res,next) {
    passport.authenticate('local', { // options
        failureRedirect: process.env.CLIENT_PATH + 'login', 
        successFlash: 'Welcome!',
        failureFlash: 'Fail login!',
    }, 
    function successRedirect (err, user, info) { // callback redirect (back to origin)
        if(err || !user) {
            console.log("Can't Login process : " + err);
            return res.redirect(process.env.CLIENT_PATH + 'login');
        }

        req.logIn(user, null, (err) => {
            if(err) {
                console.log("Can't Login process : " + err);
                return res.redirect(process.env.CLIENT_PATH + 'login');
            }

            const token = jwt.sign({
                id : user.id,
                level : user.level,
            }, 
            process.env.JWT_SECRET, 
            { expiresIn : '1h', });

            req.session['jwttoken'] = token; 
            req.session.save(err => {
                if(err) console.log(err);
                console.log(req.sessionID);
                res.redirect(String(process.env.CLIENT_PATH) + `?sid=${req.sessionID}`);
            });
        });   
    })(req,res);        
});

// social login strategy
router.get('/social/facebook', passport.authenticate('facebook'));
router.get('/social/google', passport.authenticate('google', 
    { scope: ['profile'] }
));

router.get('/facebook/callback', // http://localhost:3000/auth/facebook/callback
    passport.authenticate('facebook', { 
        failureRedirect: process.env.CLIENT_PATH
    }), (req,res) => {
        console.log("SUCCESS FACEBOOK LOGGED : ");
        req.session['userdata'] = req.user.id; 
        req.session.save(err => {
            if(err) console.log(err);
            res.redirect(String(process.env.CLIENT_PATH) + `?sid=${req.sessionID}`);
        });
    }
);

router.get('/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: process.env.CLIENT_PATH
    }), (req,res) => {
        console.log("SUCCESS GOOGLE_OAUTH20 LOGGED : ");
        req.session['userdata'] = req.user.id; 
        req.session.save(err => {
            if(err) console.log(err);
            res.redirect(String(process.env.CLIENT_PATH) + `?sid=${req.sessionID}`);
        });
    }
);

// logout & session destroy
router.get('/logout', verifyToken, (req, res) => {
    req.logOut();
    req.session.destroy(() => {
        res.redirect(process.env.CLIENT_PATH);
    });
    return;
});

module.exports = router;