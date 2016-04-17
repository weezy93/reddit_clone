angular.module('RedditClone')
.service('crudService', ['$http', function ($http) {
  return {
    getAll: function (resource) {
      return $http.get('/' + resource)
      .then(function (results) {
        return results;
      })
      .catch(function (err) {
        return err;
      });
    },
    getOne: function (resource, payload) {
      $http.get('/' + resource)
      .then(function (results) {
        return result;
      })
      .catch(function (err) {
        return next(err);
      });
    },
    addOne: function (resource, payload) {
      return $http.post('/' + resource, payload)
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        return err;
      });
    },
    deleteOne: function (resource, post) {
      return $http.delete('/' + resource )
      .then(function (res) {
        console.log('res', res);
        return res;
      })
      .catch(function (err) {
        return err;
      });
    },
    updateOne: function (resource, payload) {
      // update
    }
  }
}])
.service('postService', ['crudService', function (crudService) {
  return {
    getAllPosts: function () {
      return crudService.getAll('posts')
      .then(function (posts) {
        return posts.data.data;
      });
    },
    getSinglePost: function (id) {
        return crudService.getOne('posts/' + id)
        .then(function (post) {
          return post;
        });
    },
    addPost: function (post) {
      // return $http.post('/posts/new')
    },
    updatePost: function (post, option) {
      // update single
    },
    deletePost: function (post) {
      // findByIdAndRemove(post._id)
    }
  }
}]);
