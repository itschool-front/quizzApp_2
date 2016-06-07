(function () {
    'use strict';
    angular.module('testsManagement')
           .controller('TestsCtrl', ['questionsResource', TestsCtrl]);
           
    function TestsCtrl(questionsResource){
        var vm =this;
        
        //////////// Interface /////////////////
        
        vm.toggleQuestions = toggleQuestions;
        vm.showQusetions = false;
        
       
        /*  Array of all tests available    */
        vm.allTests=[];
        vm.mockTests=[];
       
       
        ///////////// Implementation /////////////
        
        function toggleQuestions() {
              vm.showQuestions = !vm.showQuestions;
        }
        
        
        function getAlltests() {
            var tests = questionsResource.all({}, function(){
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

        ///////////// Constructor /////////////

        vm.allTests = getAlltests();
        






     
       /* Faking HTTP Backend response */
        vm.mockTests = [
        {
            "questions": [],
            "description": "Java senior",
            "isPublic": true,
            "startDate": "2014-04-01T00:00:00.000Z",
            "endDate": "2018-04-02T00:00:00.000Z",
            "isHidden": false,
            "id": 4,
            "createdAt": "2016-05-21T08:39:06.000Z",
            "updatedAt": "2016-06-06T16:36:08.000Z"
        },
        {
            "questions": [
            {
                "description": "Is HTML a programming language?",
                "answerType": "single",
                "isHidden": false,
                "test": 2,
                "pictureFd": ".tmp/uploads/1370bdc8-924b-41f6-a1c8-c0947378afd0",
                "id": 2,
                "createdAt": "2016-05-21T08:39:31.000Z",
                "updatedAt": "2016-05-21T08:39:31.000Z"
            }
            ],
            "description": "HTML basic",
            "isPublic": true,
            "startDate": "2016-04-19T00:00:00.000Z",
            "endDate": "2016-05-19T00:00:00.000Z",
            "isHidden": false,
            "id": 2,
            "createdAt": "2016-05-21T08:38:56.000Z",
            "updatedAt": "2016-06-06T21:04:23.000Z"
        },
        {
            "questions": [
            {
                "description": "Чем очищается поток?",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 4,
                "createdAt": "2016-05-23T11:49:19.000Z",
                "updatedAt": "2016-05-23T11:49:19.000Z"
            },
            {
                "description": "К какому элементу будет применяться селектор a.id?",
                "answerType": "multi",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 5,
                "createdAt": "2016-05-23T11:49:51.000Z",
                "updatedAt": "2016-05-23T11:49:51.000Z"
            },
            {
                "description": "Как задать стиль только для первого блока?",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": ".tmp/uploads/6a0e3f31-1d55-40a7-a277-4cfc687f3439",
                "id": 6,
                "createdAt": "2016-05-23T11:50:21.000Z",
                "updatedAt": "2016-05-23T11:50:21.000Z"
            },
            {
                "description": "Как добавить фоновый цвет ко всем элементам <h1>?",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 7,
                "createdAt": "2016-05-21T08:43:19.000Z",
                "updatedAt": "2016-05-21T08:43:19.000Z"
            },
            {
                "description": "Чтобы задать всплывающую подсказку при наведении на изображение необходимо использовать атрибут:",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 8,
                "createdAt": "2016-05-23T11:51:19.000Z",
                "updatedAt": "2016-05-23T11:51:19.000Z"
            },
            {
                "description": "Какие из перечисленных ниже тегов являются блочными?",
                "answerType": "multi",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 9,
                "createdAt": "2016-05-23T11:51:42.000Z",
                "updatedAt": "2016-05-23T11:51:42.000Z"
            },
            {
                "description": "В чем отличие тегов <div> и <span>?",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 10,
                "createdAt": "2016-05-21T08:43:28.000Z",
                "updatedAt": "2016-05-21T08:43:28.000Z"
            },
            {
                "description": "Чтобы организовать ненумерованный список необходимо использовать тег",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 11,
                "createdAt": "2016-05-21T08:43:31.000Z",
                "updatedAt": "2016-05-21T08:43:31.000Z"
            },
            {
                "description": "В каких ситуациях имена идентификаторов и классов можно называть одинаково?",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": null,
                "id": 12,
                "createdAt": "2016-05-21T08:43:33.000Z",
                "updatedAt": "2016-05-21T08:43:33.000Z"
            },
            {
                "description": "Какой размер в пунктах будет у текста <p><span>Пример текста</span></p>, если на странице задан следующий стиль?",
                "answerType": "single",
                "isHidden": false,
                "test": 5,
                "pictureFd": ".tmp/uploads/90252895-2b5b-416c-ba90-51c3e33b769e",
                "id": 13,
                "createdAt": "2016-05-23T11:52:18.000Z",
                "updatedAt": "2016-05-23T11:52:18.000Z"
            },
            {
                "description": "Ваш отзыв:",
                "answerType": "free",
                "isHidden": false,
                "test": 5,
                "pictureFd": ".tmp/uploads/60d80951-255f-486a-be00-b2a134c17b54",
                "id": 14,
                "createdAt": "2016-05-23T11:52:12.000Z",
                "updatedAt": "2016-05-23T11:52:12.000Z"
            }
            ],
            "description": "Основы HTML и Web",
            "isPublic": true,
            "startDate": "2016-04-01T00:00:00.000Z",
            "endDate": "2016-08-30T00:00:00.000Z",
            "isHidden": false,
            "id": 5,
            "createdAt": "2016-05-24T07:41:59.000Z",
            "updatedAt": "2016-06-06T22:25:32.000Z"
        },
        {
            "questions": [
            {
                "description": "What is recursion",
                "answerType": "single",
                "isHidden": false,
                "test": 6,
                "pictureFd": null,
                "id": 15,
                "createdAt": "2016-05-21T08:42:32.000Z",
                "updatedAt": "2016-05-21T08:42:32.000Z"
            },
            {
                "description": "Compiler is a piece of software, that:",
                "answerType": "multi",
                "isHidden": false,
                "test": 6,
                "pictureFd": null,
                "id": 16,
                "createdAt": "2016-05-21T08:42:36.000Z",
                "updatedAt": "2016-05-21T08:42:36.000Z"
            }
            ],
            "description": "Programming",
            "isPublic": true,
            "startDate": "2016-04-30T00:00:00.000Z",
            "endDate": "2016-05-30T00:00:00.000Z",
            "isHidden": false,
            "id": 6,
            "createdAt": "2016-05-21T08:39:09.000Z",
            "updatedAt": "2016-06-06T15:02:54.000Z"
        },
        {
            "questions": [],
            "description": "Java middle",
            "isPublic": false,
            "startDate": "2016-04-01T00:00:00.000Z",
            "endDate": "2018-04-30T00:00:00.000Z",
            "isHidden": false,
            "id": 3,
            "createdAt": "2016-05-21T08:42:14.000Z",
            "updatedAt": "2016-06-06T15:03:04.000Z"
        },
        {
            "questions": [
            {
                "description": "Is Java a program language?",
                "answerType": "multi",
                "isHidden": false,
                "test": 1,
                "pictureFd": ".tmp/uploads/288aa18b-5d9e-4ad9-8329-b1d6ea7d1497",
                "id": 1,
                "createdAt": "2016-05-21T08:40:11.000Z",
                "updatedAt": "2016-05-30T08:25:13.000Z"
            },
            {
                "description": "Выберите цифру 1 на картинках",
                "answerType": "single",
                "isHidden": false,
                "test": 1,
                "pictureFd": null,
                "id": 3,
                "createdAt": "2016-05-21T08:41:12.000Z",
                "updatedAt": "2016-05-21T08:41:12.000Z"
            }
            ],
            "description": "Java basic",
            "isPublic": true,
            "startDate": "2016-04-04T00:00:00.000Z",
            "endDate": "2016-04-20T00:00:00.000Z",
            "isHidden": false,
            "id": 1,
            "createdAt": "2016-05-21T08:39:00.000Z",
            "updatedAt": "2016-06-06T16:34:19.000Z"
        }
      ];
      
  
        
    }
    
})()