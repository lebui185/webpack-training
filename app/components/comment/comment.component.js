angular
    .module('angularWebpack')
    .component('comment', {
        template: require('./comment.component.html'),
        controller: commentController
    });

function commentController() {
    var vm = this;

    vm.comment = {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
}