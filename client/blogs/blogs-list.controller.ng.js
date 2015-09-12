'use strict'

angular.module('ghostAngularMeteorApp')
.controller('BlogsListCtrl', function($scope, $meteor) {
  // var blogs = $scope.blogs = {};
  $scope.blogs = $meteor.collection(Blog).subscribe('blog');
  // $scope.page = 1
  // $scope.perPage = 3
  // $scope.sort = {name_sort : 1};
  // $scope.orderProperty = '1'
  //
  // $scope.blogs = $scope.$meteorCollection(function() {
  //   return Blogs.find({}, {sort:$scope.getReactively('sort')});
  // });
  // $meteor.autorun($scope, function() {
  //   $scope.$meteorSubscribe('blogs', {
  //     limit: parseInt($scope.getReactively('perPage')),
  //     skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
  //     sort: $scope.getReactively('sort')
  //   }, $scope.getReactively('search')).then(function() {
  //     $scope.blogsCount = $scope.$meteorObject(Counts, 'numberOfBlogs', false);
  //   });
  // });
  //
  // $meteor.session('blogsCounter').bind($scope, 'page');
  //
  // $scope.save = function() {
  //   if($scope.form.$valid) {
  //     $scope.blogs.save($scope.newBlog);
  //     $scope.newBlog = undefined;
  //   }
  // };
  //
  // $scope.remove = function(blog) {
  //   $scope.blogs.remove(blog);
  // };
  //
  // $scope.pageChanged = function(newPage) {
  //   $scope.page = newPage;
  // };
  //
  // $scope.$watch('orderProperty', function() {
  //   if($scope.orderProperty) {
  //     $scope.sort = {name_sort: parseInt($scope.orderProperty)};
  //   }
  // });
});
