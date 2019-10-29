var express= require('express');
var router = express.Router();
var join = require("./join")
var login = require("./login")
var userInfo = require("./userInfo")


router.use("/join",join)
router.use("/login",login)
router.use("/userInfo",userInfo)

 

module.exports=router;

