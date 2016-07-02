(function() {
  'use strict';

  angular.module('mutantApp', [
    // Angular modules
    'ui.router',

    // Custom modules
    'mutantApp.home',
    'mutantApp.mutantList',
    'mutantApp.auth',
    'mutantApp.core',
    'mutantApp.layout',
  ])
  .config(configFunction)
  .run(runFunction);

  configFunction.$inject = ['$urlRouterProvider'];

  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  runFunction.$inject = ['$rootScope', '$location', 'authService'];

  function runFunction($rootScope, $location, authService) {
    $rootScope.$on('$stateChangeStart', function(event, nextRoute, currentRoute) {
      if($location.path() === '/mutantlist' && !authService.isLoggedIn()) {
          $location.path('/login');
      }
    });
  }
})();
