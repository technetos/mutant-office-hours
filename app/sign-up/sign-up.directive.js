{
  angular.module('mutantlist.signUp').directive('signUp', ['$state','UserService', ($state, UserService) => {
    class SignUpController {
      constructor() {
        //presumably we can leverage js's dynamic properties...we shall see
        this.user = {};
      }
      submit() {
        UserService.create(this.user);//.then(() => $state.go('home');
      }
    }

    return {
      scope:{},
      controller:SignUpController,
      controllerAs:'vm',
      bindToController:true,
      templateUrl:'/sign-up/sign-up.html',
    };
  }]);
}
