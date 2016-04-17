var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/redditClone',
  development: 'mongodb://localhost/redditClone',
  production: process.env.MONGODB_URI
}

// config.SALT_WORK_FACTOR =;
// config.TOKEN_SECRET = ;

module.exports = config;
