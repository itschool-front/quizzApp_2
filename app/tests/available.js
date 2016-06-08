(function () {
    'use strict';
    angular.module('testsManagement')
           .controller('available', ['testsAvailable', 'questionsResource', available]);
           
    function available(testsAvailable, questionsResource){
        var vm =this;
        
        
        
        vm.allTests = testsAvailable;
        
        testsAvailable.forEach(function(test) {
           
           //Getting all questions to available tests
           var questions = questionsResource.questions({ id:test.id }, function(){
              test.questions = questions.questions;
              
              test.questions.forEach(function(question){
                  var answers = questionsResource.answers({id: question.id}, function() {
                      question.answers = answers.answers;
                      console.log(test);
                  });
              });
               
           });
           
        });
        
       
         
        //////////// Interface /////////////////
       
        /*  Array of all tests available    */
      /*  vm.allTests=[];
        vm.getTestsAvailable = getTestsAvailable;  */      
       
       
        ///////////// Implementation /////////////
       /* 
        function getTestsAvailable() {
            var tests = questionsResource.available({}, function(){
                
                console.log(tests);
                
                tests.forEach(function(test){
                    test.questions.forEach(function(question) {
                        question.answers = 
                            questionsResource.answers({id: question.id}, function(){
                                question.answers = question.answers.answers
                                console.log(question);
                            });
                    });
                });
            });
            
            return tests;                       
        }
*/
        ///////////// Constructor /////////////

        /*vm.allTests = getAlltests();*/
       
    }
    
})()