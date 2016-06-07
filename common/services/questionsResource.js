(function(){
	
	angular
		.module('commonServices')
		.factory("questionsResource", ["$resource", "appSettings", questionsResource])
		
	
		function questionsResource($resource, appSettings) {
			return $resource(appSettings.serverPath, {},
				{
					all: {
						method: 'GET',
						url: appSettings.serverPath + '/test',
						isArray: true
					},				
					answers: {
						method: 'GET',
						url: appSettings.serverPath + '/question/:id',
						isArray: false
					},
					picture: {
						method: 'GET',
						url: appSettings.serverPath + 'question/picture/:id',
						isArray: false
					}					
					
				});
		
		}

		
})();
