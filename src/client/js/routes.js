angular.module('RedditClone')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../partials/main.html',
    controller: 'HomeController'
  })
  .otherwise('/');
});
