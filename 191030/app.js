var express = require('express')
var app = express()
var router = require("./router")

/* passport setting1 default  */
var passport = require("passport");
var LocalStategy = require("passport-local").Strategy;
var session = require('express-session')
var flash = require("connect-flash");
/**/ 
app.listen(3000, function () {
  console.log('Example! app listening on port 3000!');
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))  //static파일,  이미지,css,js는 public이나 static에
app.set('view engine','ejs')



/* passport setting2 default  */
app.use(session({
  secret: 'keyboard cat',
  name: 'sessionId',
  resave:false,
  saveUninitialized:true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
/*  */


app.use("/",router)


