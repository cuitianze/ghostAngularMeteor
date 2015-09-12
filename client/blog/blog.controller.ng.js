'use strict'

angular.module('ghostAngularMeteorApp')
.controller('BlogCtrl', function($scope, $meteor) {
  var blog = $scope.blog = {};
  blog.tags = [];
  var initTags = function() {
    blog.tags.push({
      name: ''
    });
  }
  // 初始化标签
  initTags();
  $scope.blogs = $meteor.collection(Blog, false).subscribe('blog');
  $scope.submit = function(blog) {
    blog.userId = '1';
    $scope.blogs.save(blog)
    $scope.blog = '';
  }
});
