var express= require('express');
var app = express();
var router = require("./router")
var port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static("public"))

app.use("/",router)

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})