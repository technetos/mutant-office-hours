{
  angular.module('mutantlist').service('CurrentUser', ['$window', $window => {
    class CurrentUser {
      constructor() {
        this.user = JSON.parse($window.localStorage.getItem('CurrentUser'));
      }
      set(user) {
        this.user = user;
        $window.localStorage.setItem('CurrentUser', JSON.stringify(this.user));
      }
      get() {
        return this.user || {};
      }
      clear() {
        this.user = undefined;
        $window.localStorage.removeItem('CurrentUser');
      }
      signedIn() {
        return !!(this.get()._id);
      }
    }
    return new CurrentUser();
  }]);
}
