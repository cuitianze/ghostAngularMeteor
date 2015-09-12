angular.module('ghostAngularMeteorApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
  'hc.marked'
]);

onReady = function() {
  angular.bootstrap(document, ['ghostAngularMeteorApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
