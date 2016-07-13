{
  angular.module('mutantlist.user').service('UserService', [
      '$http',
      'API_BASE',
      'AuthToken',
      'CurrentUser',
      ($http, API_BASE, AuthToken, CurrentUser) => {
        const apiURL = `${API_BASE}users/`;
        class UserService {
          //signup
          create(user) {
            return $http.post(apiURL, { user }).then(res => {
              AuthToken.set(res.data.authToken);
              CurrentUser.set(res.data.user);
            });
          }
          //update
          update(user) {
            return $http.put(`${apiURL}${user._id}`, { user }).then(res => {
              CurrentUser.set(res.data.user);
            });
          }
        }
        return new UserService();
      }
  ]);
}
