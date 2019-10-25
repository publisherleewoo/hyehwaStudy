var express = require('express')
var router = express.Router();
var path = require("path")

//main page는 login이 될 때만(즉 세션정보가 있을때만) 접근이 가능하게 하자
router.get('/', function (req, res) {
    console.log('main is loaded',req.user)
    var id = req.user;
    if(!id) res.render("login.ejs")  //로그인이 안되면 
    // res.sendFile(path.join(__dirname,"../public/main.html"))   //cmd : pwd
    res.render('main.ejs',{"id":id})
});

module.exports = router;