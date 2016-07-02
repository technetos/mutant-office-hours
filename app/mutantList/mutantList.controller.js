(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService'];

  function MutantListController(mutantService) {
    var vm = this;

    //vm.mutants = mutantService.getMutants()
    mutantService.getMutants();
  }

})();
