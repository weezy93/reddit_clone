angular.module('RedditClone')
.controller('postController', ['$scope', '$location', 'postService', function ($scope, $location, postService) {

  $scope.posts = [];
  $scope.postBody = {};

  $scope.refresh = function () {
    postService.getAllPosts()
    .then(function (posts) {
      $scope.posts = posts;
    });
  };

  $scope.refresh();

  $scope.getSinglePost = function (id) {
    postService.getSinglePost(id)
    .then(function (post) {
      postService.singlePost = post;
      $location.path('/posts/show')
    });
  };

  $scope.addPost = function (postBody) {
    postService.addPost(postBody)
    .then(function (post) {
      postService.singlePost = post;
      $location.path('/posts/show');
    });
  };

  $scope.updatePost = function (post) {
    postService.updatePost()
    .then(function (post) {
      postService.singlePost = post;
      $location.path('/posts/show');
    });
  };

  $scope.deletePost = function (id) {
    postService.deletePost(id)
    .then(function (post) {
      $scope.refresh();
      $location.path('/posts');
    });
  };
}])
.controller('singlePostController', ['$scope', '$location', 'postService', function ($scope, $location, postService) {
  $scope.post = postService.singlePost;
}])
.controller('loginController', ['$scope', 'authService', function ($scope, authService) {
  $scope.title = 'Login';
}]);


// angular.module('RedditClone')
// .controller('HomeController', [ '$scope', function ($scope) {
//   $scope.posts = {
//     makePost: false,
//     searching: false,
//     latestID: 1,
//     showOnePost: false,
//     singlePost: {},
//     commenting: false,
//     postArray: [{
//       username: '@doge',
//       image: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg',
//       id: 1,
//       body:' Bacon ipsum dolor amet landjaeger chuck meatball chicken hamburger porchetta cow ball tip, turducken capicola rump pork chop boudin short loin salami. Tongue picanha flank meatloaf, strip steak beef leberkas landjaeger shank boudin. Andouille pig kielbasa, tenderloin cupim rump meatball drumstick. Salami pork tongue, turkey biltong shank filet mignon tri-tip corned beef ham.',
//       votes: {
//         total: 0,
//         upVote: 0,
//         downVote: 0,
//       },
//     },{
//       username: '@catt',
//       image: 'http://cdn1.theodysseyonline.com/files/2015/06/08/6356938644488566691013182599_grumpy-cat.jpg',
//       id: 2,
//       body:'Morbi interdizzle. My shizz boofron. Maecenizzle nisl. Etiam elit ante, check out this quizzle, rizzle yo mamma, scelerisque fizzle, fizzle. Go to hizzle egizzle neque. Duis felizzle. Sheezy nonummy, nisl you son of a bizzle fringilla cursizzle, fo shizzle mi go to hizzle , sure laorizzle neque enim my shizz crackalackin. Curabitur consequizzle nibh vizzle dawg. Yippiyo shit dolizzle nec libero. Crizzle placerat, ma nizzle vizzle shit lacinia, lorizzle erizzle izzle tortizzle, mofo luctizzle daahng dawg est sizzle est.',
//       votes: {
//         total: 1,
//         upVote: 1,
//         downVote: 0,
//       },
//       comments: [],
//     }],
//   };
//
//   $scope.sort = 'upVote';
//
//   $scope.search = {};
//   $scope.search.searchWord = '';
//   $scope.search.returnSearch = {};
//
//   $scope.commentBody = {};
//
//   // Action - functions
//   $scope.action = {};
//   $scope.action.showPostForm = function () {
//     $scope.posts.makePost = true;
//   };
//
//   $scope.action.home = function () {
//     $scope.posts.makePost = false;
//     $scope.posts.singlePost = {};
//     $scope.posts.showOnePost = false;
//     $scope.posts.searching = false;
//   };
//
//   $scope.action.createPost = function (newPost) {
//     newPost.id = ++$scope.posts.latestID;
//     newPost.votes = { total:0, upVote: 0, downVote: 0 };
//     $scope.posts.postArray.push(newPost);
//     $scope.postBody = { username: '', body: '' };
//     $scope.posts.makePost = false;
//   };
//
//   $scope.action.upVote = function (post) {
//     var index = $scope.posts.postArray.indexOf(post);
//     $scope.posts.postArray[index].votes.upVote++;
//     $scope.posts.postArray[index].votes.total++;
//     console.log(post, index);
//   };
//
//   $scope.action.downVote = function (post) {
//     var index = $scope.posts.postArray.indexOf(post);
//     $scope.posts.postArray[index].votes.downVote++;
//     $scope.posts.postArray[index].votes.total--;
//   };
//
//   $scope.action.deletePost = function (post) {
//     var index = $scope.posts.postArray.indexOf(post);
//     $scope.posts.postArray.splice(index, 1);
//     return $scope.action.home();
//   };
//
//   $scope.action.showSearch = function () {
//     $scope.posts.searching = !$scope.posts.searching;
//   };
//
//   $scope.action.showOnePost = function (postObj) {
//     $scope.posts.showOnePost = true;
//     var index = $scope.posts.postArray.indexOf(postObj);
//     return $scope.posts.singlePost = postObj;
//   };
//
//   $scope.action.showComment = function () {
//     $scope.posts.commenting = !$scope.posts.commenting;
//   };
//
//   $scope.action.addComment = function (id, comment) {
//     var index = $scope.posts.postArray.indexOf(id);
//     console.log(comment);
//     $scope.posts.postArray[index].comments.push(comment);
//   };
//
// }]);
