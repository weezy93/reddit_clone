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
    getOne: function (resource) {
      return $http.get('/' + resource)
      .then(function (result) {
        return result;
      })
      .catch(function (err) {
        return next(err);
      });
    },
    addOne: function(resource, data) {
      return $http({
        method: 'POST',
        url: '/' + resource,
        data: data,
      }).then(function(result) {
        return result.data.data;
      }).catch(function(err) {
        return err;
      });
    },
    deleteOne: function (resource) {
      return $http.delete('/' + resource )
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        return err;
      });
    },
    updateOne: function (resource, payload) {
      return $http.put('/' + resource, payload);
    }
  }
}])
.service('postService', ['crudService', function (crudService) {
  return {
    singlePost: {},
    getAllPosts: function () {
      return crudService.getAll('posts')
      .then(function (posts) {
        return posts.data.data;
      });
    },
    getSinglePost: function (id) {
      return crudService.getOne('posts/' + id)
      .then(function (post) {
        return post.data.data;
      });
    },
    addPost: function (postBody) {
      return crudService.addOne('posts/new', postBody)
      .then(function (post) {
        return post;
      });
    },
    updatePost: function (post, option) {
      // update single
    },
    deletePost: function (id) {
      return crudService.deleteOne('posts/' + id)
      .then(function (post) {
        return post;
      });
    }
  }
}]);
