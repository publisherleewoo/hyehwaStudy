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
 


router.post("/",(req,res)=>{
    var email = req.body.email;
    connection.query(`SELECT * FROM user WHERE email=?`,[email],(err,rows)=>{
        if(err) throw err;
        if(rows[0]){
          res.render('userInfo',rows[0])
        }
    })
})
 
router.put("/",(req,res)=>{
  var uid = req.body.uid;
  var name = req.body.name;
  var email = req.body.email;
  var UPDATES = [email,name,uid];

  connection.query(`UPDATE user SET email = ? , name =? WHERE uid=?`,UPDATES,(err,result)=>{
      if(err) throw err;
      if(result){     
        connection.query(`select * from user where uid = ? `,[uid],(err,rows)=>{
          if(err) throw err;
          if(rows[0]){
            // res.json(rows[0])
            console.log(rows[0].uid)
            res.render('userInfo',rows[0])
          }
        })
      }
  })
})

router.delete("/",(req,res)=>{

})


module.exports = router;



