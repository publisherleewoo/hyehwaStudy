var express = require('express')
var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))  //static파일,  이미지,css,js는 public이나 static에
app.set('view engine','ejs')

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/public/main.html")   //cmd : pwd
});


app.get('/abc',(req,res)=>{
    res.send("<h1>hi</h1>");
})

 
app.post('/email_post', (req, res) => {
    console.log(req.body.email)
    res.render('email.ejs',{'email':req.body.email})
})

app.post('/ajax_send_email', (req, res) => {
    var responseData = {"result":"ok", "email":req.body.email};
    res.json(responseData)
})

app.listen(3000, function () {
  console.log('Example! app listening on port 3000!');
});

