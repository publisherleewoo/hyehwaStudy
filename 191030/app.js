var express = require('express')
var app = express()
var index = require("./router")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))  //static파일,  이미지,css,js는 public이나 static에
app.set('view engine','ejs')

app.use("/",index)

app.get('/',(req,res)=>{
    res.send("<h1>Test Hello index</h1>");
})

app.listen(3000, function () {
  console.log('Example! app listening on port 3000!');
});

