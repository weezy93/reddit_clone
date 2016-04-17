var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var faker = require('faker');

var PostSchema = new Schema ({
  username: { type: String, required: true },
  postBody: { type: String, required: true },
  image: { type: String, required: true }
});

var Post = mongoose.model('posts', PostSchema);

module.exports = Post;
