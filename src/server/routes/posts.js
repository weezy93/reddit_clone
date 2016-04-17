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

router.get('/:id', function (req, res, next) {
  Posts.findById(req.params.id)
  .then(function (post) {
    res.status(200).json({
      status: 'success',
      data: post
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.post('/new', function (req, res, next) {
  var post = new Posts(req.body);
  post.save()
  .then(function (post) {
    res.status(200).json({
      status: 'success',
      data: post
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.delete('/:id', function (req, res, next) {
  var post_id = req.params.id;
  Posts.findByIdAndRemove(post_id)
  .then(function (post) {
    res.status(200).json(post);
  })
  .catch(function (err) {
    return next(err);
  });
});

module.exports = router;
