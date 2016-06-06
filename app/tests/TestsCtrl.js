(function () {
    'use strict';
    angular.module('testsManagement')
           .controller('TestsCtrl', TestsCtrl);
           
    function TestsCtrl(){
        var vm =this;
        
        vm.testMessage = "Hello World!";
    }
})()