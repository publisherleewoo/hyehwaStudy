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
 
router.get('/', (req, res) => {
    console.log("get join url");
    res.sendFile(path.join(__dirname,"../../public/join.html"))
})

router.post('/', (req, res) => {
  var body =req.body;
  var email = body.email;
  var name = body.name;
  var passwd = body.password;
  var sql ={email:email, name:name, pw:passwd};

  var query = connection.query(`insert into user set ?`,sql,(err,rows)=>{
    if(err) throw err;
    else res.render('welcome.ejs',{'name':name,'id':rows.insertId})
  })
})
 

module.exports = router;