var express = require('express')
var router = express.Router();  //라우터는 자바의 컨트롤러
var path = require("path")
var mysql = require("mysql");
/*passport setting3*/
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


//DATABASE SETTING
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'jsman'
  });
  
  connection.connect();
 
router.get('/', (req, res) => {
    var msg;
    var errMsg = req.flash('error');
    if(errMsg) msg= errMsg;
    // console.log("get join url");
    res.render("join.ejs",{'message':msg})
    // res.sendFile(path.join(__dirname,"../../public/join.html"))
})

/* passport setting6 default  setting4에서 done이 일어났을때 세션이 잘처리되었을때 시리얼라이즈로 저장이되기위해 오는 값,  */
passport.serializeUser(function(user, done) {
  console.log("passport session get id:", user.id)
  done(null, user.id);
});
/* 위에  세션이 저장되었을때, 모든페이지 요청이있을때 사용되는값 */
passport.deserializeUser(function(id,done){
 done(null,id)
})


/* passport setting4 default  */
/*passport.use("local-join",)*/
/* local-join이라는 전략을 사용하겠다는 의미 */
passport.use("local-join", new LocalStrategy({
  usernameField: 'email',     //받아오는곳의 input태그 name
  passwordField: 'password',   //받아오는곳의 input태그 name
  passReqToCallback:true
},function(req,email,password,done){
  console.log('local-join callback called')
  var query = connection.query('select * from user where email=?',[email],function(err,rows){
     if(err) return done (err)
     if(rows.length){
       console.log("existed user")
       return done(null,false,{message:"your email is already used"}) //setting4 fail이기때문에 setting5/join으로 간다,
     }else{   
       var sql = {email:email, pw:password};
       var query = connection.query('insert into user set ?', sql,function(err,rows){
          if(err) throw err;
          return done(null, {'email':email,'id':rows.insertId}) //setting4 sucess이기때문에 setting5/main으로간다
       })
     }
  })
}))

/* passport setting5 default done에따른 링크 설정의미, 미리 설정한 라우팅  */
router.post("/",passport.authenticate("local-join",{
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash: true 
}))


// router.post('/', (req, res) => {
//   var body =req.body;
//   var email = body.email;
//   var name = body.name;
//   var passwd = body.password;
//   var sql ={email:email, name:name, pw:passwd};

//   var query = connection.query(`insert into user set ?`,sql,(err,rows)=>{
//     if(err) throw err;
//     else res.render('welcome.ejs',{'name':name,'id':rows.insertId})
//   })
// })
 

module.exports = router;