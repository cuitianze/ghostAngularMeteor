'use strict'

angular.module('ghostAngularMeteorApp')
.controller('BlogDetailCtrl', function($scope, $stateParams, $meteor) {
  $scope.blog = $scope.$meteorObject(Blogs, $stateParams.blogId);
  $scope.$meteorSubscribe('blogs');

  $scope.blogId = $stateParams.blogId;

  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.blog.save().then(
        function(numberOfDocs) {
          console.log('save successful, docs affected ', numberOfDocs);
        },
        function(error) {
          console.log('save error ', error);
        }
      )
    }
  };

  $scope.reset = function() {
    $scope.blog.reset();
  };
});
