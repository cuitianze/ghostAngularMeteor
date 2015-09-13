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
  // 添加标签
  $scope.addTag = function() {
    if(blog.tags.length < 8) {
      initTags();
    }
  }
  // 减标签
  $scope.minusTag = function($index) {
    if(blog.tags.length > 1) {
      blog.tags.splice($index, 1);
    }
  }


  //
  $scope.blogs = $meteor.collection(Blog, false).subscribe('blog');
  $scope.submit = function(blog) {
    blog.userId = '1';
    $scope.blogs.save(blog)
    $scope.blog = '';
    initTags();
  }
});
