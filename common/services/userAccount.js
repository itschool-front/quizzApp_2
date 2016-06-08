(function(){
	
	angular
		.module('commonServices')
		.factory("userAccount", ["$resource", "appSettings", userAccount])
		
        
	
		function userAccount($resource, appSettings) {
			
            return {
				
				/*GLOBAL METHODS FOR USER ACCSESS*/
                accessType: $resource(appSettings.serverPath, {},
				{
					login: {
						method: 'POST',
						url: appSettings.serverPath + '/login'						
					},
                    
                    register:  {
						method: 'POST',
						url: appSettings.serverPath + '/login'						
					}
				}),               


				/*GLOBAL USER OBJECT*/
                user: {
                    firstName: "",
                    secondName: "",
                    email: "",
                    password: "",
                    token: "",
                    isAdmin: false,
					isLoggedIn: false
                } 
                                   
            };  //return       
		
		}//userAccount

		
})();