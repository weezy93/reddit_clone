var mongoose = require('mongoose');

// drop database
function dropDatabase(done) {
  mongoose.connection.db.dropDatabase();
  if (done) {
    done();
  }
}

// drop, seed, create database goes here so code can be reused


module.exports = {
  dropDatabase
}
