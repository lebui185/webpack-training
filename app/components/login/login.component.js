angular
    .module('angularWebpack')
    .component('login', {
        template: require('./login.component.html'),
        controller: loginController
    });

loginController.$inject = ['$location', 'authService'];

function loginController($location, authService) {
    var vm = this;

    vm.$onInit = onInit();
    vm.username = '';
    vm.password = '';
    vm.login = login;

    function onInit() {
        
    }

    function login() {
        authService.login(vm.username, vm.password)
            .then(response => {
                $location.path('/post');
            });
    }
}