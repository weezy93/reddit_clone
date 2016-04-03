window.app = angular.module('RedditClone', [/* messages and time dependecies */]);

app.controller('HomeController', function ($scope) {
  $scope.posts = { makePost: false,
    postArray: [{
      username: '@doge',
      id: 1,
      body:' Bacon ipsum dolor amet landjaeger chuck meatball chicken hamburger porchetta cow ball tip, turducken capicola rump pork chop boudin short loin salami. Tongue picanha flank meatloaf, strip steak beef leberkas landjaeger shank boudin. Andouille pig kielbasa, tenderloin cupim rump meatball drumstick. Salami pork tongue, turkey biltong shank filet mignon tri-tip corned beef ham.',
      votes: 0,
    },{
      username: '@catt',
      id: 2,
      body:' Bacon ipsum dolor amet landjaeger chuck meatball chicken hamburger porchetta cow ball tip, turducken capicola rump pork chop boudin short loin salami. Tongue picanha flank meatloaf, strip steak beef leberkas landjaeger shank boudin. Andouille pig kielbasa, tenderloin cupim rump meatball drumstick. Salami pork tongue, turkey biltong shank filet mignon tri-tip corned beef ham.',
      votes: 0,
    }],
  };

  $scope.posts.latestID = 1;
  $scope.action = {};
  $scope.action.showPostForm = function () {
    $scope.posts.makePost = true;
  };

  $scope.action.hidePostForm = function () {
    $scope.posts.makePost = false;
  };

  $scope.action.createPost = function (newPost) {
    newPost.id =   ++$scope.posts.latestID;
    newPost.votes = 0;
    $scope.posts.postArray.push(newPost);
    $scope.postBody = { username: '', body: '' };
    $scope.posts.makePost = false;
  };

  $scope.action.upVote = function (post) {
    var index = $scope.posts.postArray.indexOf(post);
    $scope.posts.postArray[index].votes++;
    console.log($scope.posts.postArray[index].votes);
  };

  $scope.action.downVote = function (post) {
    var index = $scope.posts.postArray.indexOf(post);
    $scope.posts.postArray[index].votes--;
    console.log($scope.posts.postArray[index].votes);
  };
});
