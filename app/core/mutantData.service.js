(function() {
    "use strict";

    angular
        .module('mutantApp.core')
        .service('mutantDataService', mutantDataService);

    mutantDataService.$inject = ['$http', 'authService'];
    function mutantDataService($http, authService) {
        var service = {
            getAccount:getAccount
        }

        return service;

        //////////

        function getAccount() {
            return $http.get('/api/account', {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken()
                }
            });
        };
    }
})();
