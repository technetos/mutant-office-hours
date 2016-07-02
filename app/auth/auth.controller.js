(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'authService'];

  function AuthController($location, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.error = null;

    vm.user = {
      email: '',
      password: ''
    };

    function register(user) {
        authService.register(user).then(function() {
            if(authService.isLoggedIn()) {
                $location.path('/mutantlist');
            }
        });
    }
    
    function login(user) {
        authService.login(user).then(function() {
            if(authService.isLoggedIn()) {
                $location.path('/mutantlist');
            }
        });
    }
  }
})();
