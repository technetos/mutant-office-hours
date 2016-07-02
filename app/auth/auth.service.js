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
      getToken: getToken,
      saveToken: saveToken,
      //sendWelcomeEmail: sendWelcomeEmail,
    };

    return service;

    ///////////
    

    function getToken() {
        return $window.localStorage['mutant-token'];
    }

    function saveToken(token) {
        $window.localStorage['mutant-token'] = token;
    }

    function register(user) {
        var registerPromise = $http.post('/register', user);
        return registerPromise;
    }

    function login(user) {
        var loginPromise = $http.post('/login', user);
        return loginPromise; 
    }

    function logout() {
        // Remove the token from local storage
        $window.localStorage.removeItem('mutant-token');
    }

    function isLoggedIn() {
        var token = getToken();
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
