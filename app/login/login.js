(function () {
    'use strict';
    angular.module('testsManagement')
           .controller('login', ['userAccount', '$state', login]);
           
    function login(userAccount, $state){
  
        var vm =this;
        vm.user={}
        vm.user.email = "ertert@erter.com";
        vm.user.password = "4545123122";
        
        
        vm.login = function(){
          
            if(vm.user.email && vm.user.password ){
                
                var user = userAccount.accessType.login(null, {email: vm.user.email, password: vm.user.password}, 
                   function(data){
                
                    userAccount.user.email = vm.user.email;
                    userAccount.user.password = vm.user.password;
                    userAccount.user.token = data.token;
                    userAccount.user.isLoggedIn = true;
                    console.error(data);
                    $state.go('available');
                                 
                }, function(data) {
                     console.error('Not loged in', data);
                     $state.go('^.login');
                }); 
                          
            }//end if*/
        
        }// vm.login = function()
        
        
                                       
        

        
    }
    
})()