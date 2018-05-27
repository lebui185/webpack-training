angular
    .module('angularWebpack')
    .component('unauthorized', {
        template: require('./unauthorized.component.html'),
        controller: unauthorizedController
    });

unauthorizedController.$inject = [];

function unauthorizedController(unauthorizedService) {
    var vm = this;

}