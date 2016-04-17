angular.module('RedditClone')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    // templateUrl: '../partials/main.html',
    // controller: 'HomeController'
  })
  .when('/posts', {
    templateUrl: '../partials/main.html',
    controller: 'postController'
  })
  .when('/posts/new', {
    templateUrl: '../partials/createPostPage.html',
    controller: 'postController'
  })
  .when('/posts/show', {
    templateUrl: '../partials/showOne.html',
    controller: 'singlePostController'
  })
  .when('/register', {
    templateUrl: '../partials/login.html'
  })
  .when('/login', {
    templateUrl: '../partials/login.html'
  })
  .when('/logout', {})
  .otherwise('/');
});
