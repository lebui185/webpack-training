angular
    .module('angularWebpack')
    .run(securityConfig);

securityConfig.$inject = ['$rootScope', '$location', 'authService'];

function securityConfig($rootScope, $location, authService) {

    $rootScope.$on('$routeChangeStart', (event, toRoute, fromRoute) => {
        if (!authService.isAuthenticated()) {
            $location.path('/login');
            return;
        }

        if (!authService.hasAnyRoles(toRoute.roles)) {
            $location.path('/unauthorized');
            return;
        }
    });

    authService.pingCurrentUser();
}