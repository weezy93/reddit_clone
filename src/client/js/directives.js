angular.module('RedditClone')
.directive('navBar', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/navBar.html'
  }
})
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
