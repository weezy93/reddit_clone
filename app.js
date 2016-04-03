window.app = angular.module('RedditClone', [/* messages and time dependecies */]);

app.controller('HomeController', function ($scope) {
  $scope.posts = { postArray: ['here'], makePost: false };
  $scope.showPostForm = function () {
    $scope.posts.makePost = true;
  };

  $scope.hidePostForm = function () {
    $scope.posts.makePost = false;
  };

  $scope.createPost = function (post) {
    $scope.posts.postArray.push(post);

    // $scope.posts.postBody = {};
    $scope.posts.makePost = false;
  };
});
