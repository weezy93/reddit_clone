angular.module('RedditClone')
.service('postService', ['$http', function ($http) {
  return {
    getAllPosts: function () {
      // return all posts
    },
    getSinglePost: function () {
      // return single posts
    },
    addPost: function (post) {
      // return $http.post('/posts/new')
    },
    updatePost: function (post, option) {
      // update single
    },
    deletePost: function (post) {
      // findByIdAndRemove(post._id)
    }
  }
}]);
