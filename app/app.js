(function(){
    'use strict';
    angular.module('testsManagement', ['commonServices', 'ui.router'])
           .controller('main', ['userAccount', '$state', main])
           .config(['$stateProvider', '$urlRouterProvider', configRoute]);
           
     function main(userAccount, $state){
         var vm = this;
         vm.user = userAccount.user;
         
         vm.go = function(){
             $state.go('available');
         }
         
     }     
      
                   
     function configRoute($stateProvider, $urlRouterProvider) {
         
         //Fallback 
            /*$urlRouterProvider.otherwise("/welcome");*/
         
         $stateProvider
/*            .state("main", {
                url: "/",
                templateUrl: "index.html"
            })
*/        .state("welcome", {
                url: "^/welcome",
                templateUrl: "app/welcome/welcome.html"
            })
            .state("alltests", {
                url: "^/alltests",
                templateUrl: "app/tests/alltests.html",
                controller: "TestsCtrl as vm"
            })
            .state("login", {
                url: "^/login",
                templateUrl: "app/login/login.html",
                controller: "login as vm"
            })
           .state("register", {
                url: "^/register",
                templateUrl: "app/register/register.html",
                controller: "register as vm"
            })
            
             .state("available", {
                url: "^/available",
                templateUrl: "app/tests/available.html",
                controller: "available as vm",
                resolve: {
                    questionsResource: "questionsResource",
                    
                    testsAvailable: function(questionsResource){
                        return questionsResource.available().$promise;
                    }
                    
           /*         questionsAvailable: function(testsAvailable, questionsResource){
                     
                             testsAvailable.forEach(function(test){
                                  test.questions.forEach(function(question) {
                                      question.answers = 
                                          questionsResource.answers({id: question.id}, function(){
                                              question.answers = question.answers.answers
                                              console.log(question);
                                          });
                                  });
                              });//end forEach
                              
                              return testsAvailable;
                    }//questionsAvailable*/
                    
                }//resolve
            });//state  
                  
     }
})()