{
  angular.module('mutantlist', [
      'ui.router',
      //'mutantlist.home',
      'mutantlist.signIn',
      'mutantlist.signUp',
      'mutantlist.user',
  ]).config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
}
