{
  angular.module('mutantlist.user').config(userConfig);
  userConfig.$inject = ['$stateProvider'];
  function userConfig($stateProvider) {
    $stateProvider
      .state('sign-up', {
        url:'/sign-up',
        template:'<sign-up></sign-up>',
      })
      .state('sign-in', {
        url:'/sign-in',
        template:'<sign-in></sign-in>',
      });
  }
}
