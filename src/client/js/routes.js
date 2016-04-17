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
    templateUrl: '../partials/createPostPage.html'
  })
  .when('/posts/:id', {
    templateUrl: '../partials/showOne.html'
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
