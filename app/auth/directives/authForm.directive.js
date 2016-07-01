(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/directives/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        formName: '@',
        submitFunction: '&',
        error: '='
      }
    };
  }

  function AuthFormController() {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    }
  }

})();
