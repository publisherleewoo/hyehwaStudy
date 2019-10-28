var express= require('express');
var router = express.Router();
var join = require("./join")
var login = require("./login")



router.use("/join",join)
router.use("/login",login)

router.get('/',(req,res)=>{
    console.log("라우터 진입")
})

module.exports=router;

