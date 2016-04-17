var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var faker = require('faker');

var PostSchema = new Schema ({
  username: { type: String, required: true },
  postBody: { type: String, required: true },
  image: { type: String, required: true },
  votes: { type: Number, default: 0 },
  postedAt: { type: Date, default: new Date() },
  comments: { type: Array, default: [] },
  showComments: { type: Boolean, default: false }
});

var Posts = mongoose.model('posts', PostSchema);

module.exports = Posts;
