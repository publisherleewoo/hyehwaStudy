const express = require('express');
const router = express.Router();

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');
const files = require('./files');

/* Main */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// routers
router.use('/user', users);
router.use('/post', posts);
router.use('/comment', comments);
router.use('/file', files);

module.exports = router;
