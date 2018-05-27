angular
    .module('angularWebpack')
    .factory('studentService', studentService);

studentService.$inject = ['$http'];

function studentService($http) {
    return {
        findAll: findAll,
    };

    function findAll() {
        return $http.get('/api/students');
    }
}