var express = require('express')
var router = express.Router();  //라우터는 자바의 컨트롤러
var path = require("path")
var mysql = require("mysql");

//DATABASE SETTING
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'jsman'
  });
  
  connection.connect();

//ROUTER!!
router.post('/form', (req, res) => {
    console.log(req.body.email)
    res.render('email.ejs',{'email':req.body.email})
})

router.post('/ajax', (req, res) => {
    var email = req.body.email;
    var responseData = {};
 
    var query = connection.query(`select name from user where email='${email}'`,function(err,rows){
       
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0].name)
            responseData.result="ok";
            responseData.name=rows[0].name;
        }else{
            responseData.result="none";
            responseData.name="";
        }
        res.json(responseData)
    })
})

module.exports = router;