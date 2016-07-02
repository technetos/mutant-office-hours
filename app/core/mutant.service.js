(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

  mutantService.$inject = ['mutantDataService'];

  function mutantService(mutantDataService) {
    var mutants = null;

    var service = {
      Mutant: Mutant,
      getMutants: getMutants,
      //addMutant: addMutant,
      //removeMutant: removeMutant,
    };

    return service;

    /////////////

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }

    function getMutants() {
        mutantDataService.getMutants()
            .success(function(data) {
                mutants = data;
            });
    }
  }
})();
