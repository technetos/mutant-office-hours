(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantTable', xtMutantTable);

  function xtMutantTable() {
    return {
      templateUrl: 'app/mutantList/directives/mutantTable.html',
      restrict: 'E',
      controller: MutantTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        mutants: '=',
      }
    };
  }

  MutantTableController.$inject = [];

  function MutantTableController() {
    var vm = this;

    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;
    vm.toggleComplete = toggleComplete;

    function toggleComplete(mutant) {
      //vm.mutants.$save(mutant);
    }

    function deleteMutant(mutant) {
      //vm.mutants.$remove(mutant);
    }

    function sendText(mutant) {
      //textMessageService.sendText(mutant, vm.mutants);
    }
  }
})();
