var express= require('express');
var router = express.Router();
var mysql = require('mysql');
var path = require('path')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'jsman'
});
 
connection.connect();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../public/login.html"))
})

router.post("/",(req,res)=>{
    var email = req.body.email;
    var pw = req.body.pw;
    var selectTarget = [email,pw]
    connection.query(`SELECT * FROM user WHERE email = ? AND pw = ?`, selectTarget, (err,rows) => {
        if(err) throw err;
        if(rows){
            console.log(rows)
            res.render("main",rows[0])
        }
    })
})


module.exports = router