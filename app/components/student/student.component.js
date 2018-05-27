import './student.service';

angular
    .module('angularWebpack')
    .component('student', {
        template: require('./student.component.html'),
        controller: studentController
    });

studentController.$inject = ['studentService'];

function studentController(studentService) {
    var vm = this;

    vm.$onInit = onInit();
    vm.students = [];

    function onInit() {
        studentService.findAll().then(response => vm.students = response.data);
    }

    
}