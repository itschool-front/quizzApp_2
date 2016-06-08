(function () {
    'use strict';
    angular.module('testsManagement')
           .controller('register', ['userAccount', register]);
           
    function register(userAccount){
  
        var vm =this;
        
       vm.login = function(){
           
            if( vm.user.email && vm.user.password && 
                vm.user.firstName && vm.user.secondName ){                
                
                console.log(vm.user);
                
               var user = userAccount.accessType.register(null, {email: vm.user.email, password: vm.user.password,
                                                                    firstName: vm.user.firstName, lastname: vm.user.lastname},
                            function(data){
                                    
                                    userAccount.user.firstName = vm.user.firstName;
                                    userAccount.user.secondName = vm.user.secondName;
                                    userAccount.user.email = vm.user.email;
                                    userAccount.user.password = vm.user.password;
                                    userAccount.user.token = data.token;
                                    userAccount.user.isLoggedIn = true;
                                     $state.go('^.available');
                            }, function(data) {
                                    console.error(data);
                                    $state.go('^.register');                            
                             });
                
            }//end if
            
            
                      
        }//vm.login
        
    }//register
    
})()