var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/reddit_clone',
  development: 'mongodb://localhost/reddit_clone',
  production: process.env.MONGODB_URI
}

// config.SALT_WORK_FACTOR =;
// config.TOKEN_SECRET = ;

module.exports = config;
