'use strict'

angular.module('ghostAngularMeteorApp')
.config(function($stateProvider) {
  $stateProvider
  .state('blog', {
    url: '/blog',
    templateUrl: 'client/blog/blog.view.ng.html',
    controller: 'BlogCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});