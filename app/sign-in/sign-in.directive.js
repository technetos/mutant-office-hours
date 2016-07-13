{
  angular.module('mutantlist.signIn').directive('signIn', ['$state','UserService', ($state, UserService) => {
    class SignInController {
      constructor() {
        this.user = {};
      }
      submit() {
        var vm = this;
        UserService.login(vm.user);//.then(() => $state.go('home'));
      }
    }
    return {
      scope:{},
      controller:SignInController,
      controllerAs:'vm',
      bindToController:true,
      templateUrl:'/sign-in/sign-in.html',
    };
  }]);
}
