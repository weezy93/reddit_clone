var express = require('express');
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('../../_config');

var User = require('../models/users');

router.post('/register', function (req, res, next) {

  User.findOne({ email: req.body.email })
  .then(function (existingUser) {
    if (existingUser) {
      return res.status(409).json({
        status: 'fail',
        message: 'Email already exists'
      });
    }

    var newUser = new User (req.body);
    newUser.save(function () {
      // create token
      var token = generateToken(newUser)
      res.status(200).json({
        status: 'success',
        data: {
          token: token,
          user: newUser.email
        }
      });
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

  // ensure user doesn't exist
  // User.findOne({ email: req.body.email }, function (err, existingUser) {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (existingUser) {
  //     return res.status(409).json({
  //       status: 'fail',
  //       message: 'Email already exists'
  //     });
  //   }
  // });
  // if not exists, create user
  // var newUser = new User (req.body);
  // newUser.save(function () {
  //   // create token
  //   // var token = ??
  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       token: token,
  //       user: newUser.email
  //     }
  //   });
  // });

router.post('/login', function (req, res, next) {
  // ensure that user exists
  User.findOne({ email: req.body.email })
  .then(function (user) {
    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'Email does not exist'
      });
    } else
      user.comparePassword(req.body.password, function (err, match) {
        if (err) {
          return next(err);
        }
        if (!match) {
          return res.status(401).json({
            status: 'fail',
            message: 'Password is not correct' // handle differently on client side
          });
        }

      user = user.toObject();
      // delete user.password;
      var token = generateToken(user);
      res.status(200).json({
        status: 'success',
        data: {
          token: token,
          user: user.email
        }
      });
    // compare password with hashed password
    })
  })
  .catch(function (err) {
    return next(err);
  });
});

router.get('/logout', function (req, res, next) {

});

function generateToken(user) {
  var payload = {
    exp: moment().add(14, 'days').unix(),
    init: moment().unix(),
    sub: user._id
  }
  return jwt.encode(payload, config.TOKEN_SECRET);
}

function ensureAuthenticated(req, res, next) {
  // looking at headers, where token lives | authorization object lives on headers
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'fail',
      message: 'No header present or no authorization header'
    });
  }
  // decode token
  var header = req.headers.authorization.split(' ');
  var token = header[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);
  var now = moment().unix();
  // ensure not expired, ensure valid
  if (now > payload.exp || payload.ist > now) {
    return res.status(401).json({
      status: 'fail',
      message: 'Token has invalid'
    });
  }
  // ensure user still in database
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(400).json({
        status: 'fail',
        message: 'User does not exist'
      });
    }
    // attach user to request object
    req.user = user;
    // call next middleware function
    next();
  });

}

function ensureAdmin(req, res, next) {
  // check for user object
  // check for admin === true on user object
  if (!(req.user && req.user.admin)) {
    return res.status(401).json({
      status: 'fail',
      message: 'User is not authorized'
    });
    // throw error
  }
  next();
}

module.exports = router;
