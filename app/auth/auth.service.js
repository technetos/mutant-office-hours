(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .factory('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {

    var service = {
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      //sendWelcomeEmail: sendWelcomeEmail,
    };

    return service;

    ///////////

    function register(user) {
        return $http.post('/api/register', user)
            .success(function(data) {
                // Save the token to local storage
                $window.localStorage['mutant-token'] = data.token;
            });
    }

    function login(user) {
        return $http.post('/api/login', user)
            .success(function(data) {
                // Save the token to local storage
                $window.localStorage['mutant-token'] = data.token;
    }

    function logout() {
        // Remove the token from local storage
        $window.localStorage.removeItem('mutant-token');
    }

    function isLoggedIn() {
        var token = $window.localStorage['mutant-token'];
        var payload;

        if(token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    /*function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }*/
  }
})();
