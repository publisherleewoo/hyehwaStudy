const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const index = require('./routes/index'); // router
const passport = require('passport');
const cors = require('cors');
//const sequelize = require('./model').sequelize;
const {sequelize}=require('./model');

// env parser 
// env_used.txt 참고
require('dotenv').config();

//서버 생성
var app = express();
app.use(cors()); // CORS
sequelize.sync();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port',process.env.PORT || 8001);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// helmet security
const helmet = require('helmet');
app.use(helmet());

// passport init
app.use(passport.initialize());

// main router
app.use('/api', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(app.get('port'),()=>{console.log(app.get('port'),'번 포트에서 대기 중');});
module.exports = app;
