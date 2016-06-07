(function(){
    'use strict';
    angular.module('testsManagement', ['commonServices', 'ui.router'])
           .config(['$stateProvider', '$urlRouterProvider', configRoute]);
                   
     function configRoute($stateProvider, $urlRouterProvider) {
         
         //Fallback 
         $urlRouterProvider.otherwise("/welcome");
         
         $stateProvider
            .state("welcome", {
                url: "/welcome",
                templateUrl: "app/welcome/welcome.html"
            })
            .state("alltests", {
                url: "/alltests",
                templateUrl: "app/tests/alltests.html",
                controller: "TestsCtrl as vm"
            });      
     }
})()