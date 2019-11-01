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
    res.sendFile(path.join(__dirname,"../../public/join.html"))
})

router.post("/",(req,res)=>{
    var email = req.body.email;
    var name = req.body.name;
    var pw = req.body.pw;
    var insertsTarget = {name:name,email:email,pw:pw}
    connection.query(`INSERT INTO user SET ?`, insertsTarget, (err,rows) => {
        if(err) throw err;
        if(rows){
              res.render("join",{insertId:rows.insertId})  
        }
    })
})


module.exports = router