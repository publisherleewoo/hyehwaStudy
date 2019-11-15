var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.js', { title: 'user' });
});

module.exports = router;
