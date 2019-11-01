var express = require('express')
var router = express.Router();  //라우터는 자바의 컨트롤러
 
router.get('/',(req,res)=>{
    req.logout();
    res.redirect("/");
})

module.exports = router;

