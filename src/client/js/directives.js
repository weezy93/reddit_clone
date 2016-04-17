angular.module('RedditClone')
.directive('postBody', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/postBody.html'
  }
})
.directive('searchBar', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/searchBar.html'
  }
})
.directive('createPostForm', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/createPostForm.html'
  }
});
