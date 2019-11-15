var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.js', { title: 'comments' });
});

module.exports = router;
