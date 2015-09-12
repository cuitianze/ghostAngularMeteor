'use strict'

angular.module('ghostAngularMeteorApp')
.config(function($stateProvider) {
  $stateProvider
  .state('blogs-list', {
    url: '/',
    templateUrl: 'client/blogs/blogs-list.view.ng.html',
    controller: 'BlogsListCtrl'
  })
  .state('blog-detail', {
    url: '/blogs/:blogId',
    templateUrl: 'client/blogs/blog-detail.view.ng.html',
    controller: 'BlogDetailCtrl'
  });
});
