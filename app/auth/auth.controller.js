(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.error = null;

    vm.user = {
      email: '',
      password: ''
    };

    function register(user) {
        authService.register(user);
    }
    
    function login(user) {
        authService.login(user);
    }

  }
})();
