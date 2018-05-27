angular
    .module('angularWebpack')
    .config(routeConfig);

routeConfig.$inject = ['$routeProvider', '$locationProvider'];

function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/login', {
            template: '<login></login>',
        })
        .when('/post', {
            template: '<post></post>',
            roles: ['USER'],
        })
        .when('/comment', {
            template: '<comment></comment>',
            roles: ['USER'],
        })
        .when('/student', {
            template: '<student></student>',
            roles: ['ADMIN'],
        })
        .when('/unauthorized', {
            template: '<unauthorized></unauthorized>',
        });
};

