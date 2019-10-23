var express = require('express')
var router = express.Router();
var path = require("path")
var main = require("./main")
var email = require("./email")

router.use("/main",main)
router.use("/email",email)

router.get('/', function (req, res) {
    console.log('main is loaded')
    res.sendFile(path.join(__dirname,"../public/main.html"))   //cmd : pwd
});


module.exports = router;