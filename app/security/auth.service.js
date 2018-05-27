angular
    .module('angularWebpack')
    .factory('authService', authService);

authService.$inject = ['$http', '$httpParamSerializerJQLike'];

function authService($http, $httpParamSerializerJQLike) {

    return {
        hasAnyRoles: hasAnyRoles,
        login: login,
        logout: logout,
        pingCurrentUser: pingCurrentUser,
        isAuthenticated: isAuthenticated,
    };

    var _user = null;

    function hasAnyRoles(roles) {
        return !roles
            || _user && _user.roles && _user.roles.some(role => roles.includes(role));
    }

    function login(username, password) {
        return $http({
            method: 'POST',
            url: '/api/login',
            data: $httpParamSerializerJQLike({ username, password }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            _user = response.data;
        });
    }

    function logout() {

    }

    function pingCurrentUser() {
        return $http.get('/api/common/current_user')
            .then(response => {
                _user = response.data;
            })
            .catch(response => {
                _user = null;
            });
    }

    function isAuthenticated() {
        return _user != null;
    }
}