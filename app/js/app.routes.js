angular
    .module('angularWebpack')
    .config(routeConfig);

function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/post', {
            templateUrl: 'templates/post.html',
            controller: 'PostController',
            controllerAs: 'vm'
        })
        .when('/comment', {
            templateUrl: 'templates/comment.html',
            controller: 'CommentController',
            controllerAs: 'vm'
        });
};

