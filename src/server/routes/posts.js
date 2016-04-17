var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');

router.get('/', function(req, res, next) {
  Posts.find()
  .then(function (posts) {
    res.status(200).json({
      status: 'success',
      data: posts
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

module.exports = router;
