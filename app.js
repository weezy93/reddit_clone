window.app = angular.module('RedditClone', [/* messages and time dependecies */]);

app.controller('HomeController', function ($scope) {
  $scope.posts = { makePost: false, searching: false,
    postArray: [{
      username: '@doge',
      id: 1,
      body:' Bacon ipsum dolor amet landjaeger chuck meatball chicken hamburger porchetta cow ball tip, turducken capicola rump pork chop boudin short loin salami. Tongue picanha flank meatloaf, strip steak beef leberkas landjaeger shank boudin. Andouille pig kielbasa, tenderloin cupim rump meatball drumstick. Salami pork tongue, turkey biltong shank filet mignon tri-tip corned beef ham.',
      votes: {
        upVote: 0,
        downVote: 0,
      },
    },{
      username: '@catt',
      id: 2,
      body:' Bacon ipsum dolor amet landjaeger chuck meatball chicken hamburger porchetta cow ball tip, turducken capicola rump pork chop boudin short loin salami. Tongue picanha flank meatloaf, strip steak beef leberkas landjaeger shank boudin. Andouille pig kielbasa, tenderloin cupim rump meatball drumstick. Salami pork tongue, turkey biltong shank filet mignon tri-tip corned beef ham.',
      votes: {
        upVote: 1,
        downVote: 0,
      },
    }],
  };

  $scope.sort = 'post.upVote';

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
    $scope.posts.postArray[index].votes.upVote++;

    console.log($scope.posts.postArray[index].votes);
  };

  $scope.action.downVote = function (post) {
    var index = $scope.posts.postArray.indexOf(post);
    $scope.posts.postArray[index].votes.downVote++;

    console.log($scope.posts.postArray[index].votes);
  };

  $scope.action.deletePost = function (post) {
    var index = $scope.posts.postArray.indexOf(post);
    $scope.posts.postArray.splice(index, 1);
  };

  $scope.action.editPost = function (post) {
    // edit logic
  };

  $scope.action.showSearch = function () {
    $scope.posts.searching = !$scope.posts.searching;
  };

  $scope.action.search = function (searchWord) { // onChange
    // search logic
    var word = searchWord.toLowerCase();
    $scope.posts.postArray.forEach(function (obj) {
      if (obj.username.indexOf(word) !== -1) {
        // sort
      } else if (obj.body.indexOf(word) !== -1) {
        // sort
      } else {
        // show nothing
      }
    });
  };
});
