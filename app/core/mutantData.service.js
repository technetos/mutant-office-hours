(function() {
    "use strict";

    angular
        .module('mutantApp.core')
        .service('mutantDataService', mutantDataService);

    mutantDataService.$inject = ['$http', 'authService'];
    function mutantDataService($http, authService) {
        var service = {
            getMutants: getMutants,
        }

        return service;

        //////////

        function getMutants() {
            return $http.get('/mutants', {
                headers: { Authorization: 'Bearer ' + authService.getToken() }
            });
        };
    }
})();
