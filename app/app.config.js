angular
    .module('angularWebpack')
    .config(configure);

configure.$inject = ['$httpProvider'];

function configure($httpProvider) {
    configInterceptor($httpProvider);
};

function configInterceptor($httpProvider) {
    var ENV = {
        API_SERVER_URL: 'http://localhost:8080'
    }

    function apiInterceptor() {
        return {
            request: request => {
                if (request.url.startsWith('/api')) {
                    request.url = [ENV.API_SERVER_URL, request.url].join('');
                    request.withCredentials = true;
                }
                return request;
            },
        };
    };

    $httpProvider.interceptors.push(apiInterceptor);
}

