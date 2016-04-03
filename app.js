window.app = angular.module('RedditClone', [/* messages and time dependecies */]);

app.controller('HomeController', function ($scope) {
  $scope.posts = { posts: [], makePost: false };
  $scope.posts.showPostForm = function () {
    $scope.posts.makePost = true;
  };

  $scope.posts.createPost = function () {
    $scope.posts.makePost = false;
    $scope.posts.push(postBody = {});
  };
});
