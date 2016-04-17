angular.module('RedditClone')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../partials/main.html',
    controller: ''
  })
  .otherwise('/');
});
