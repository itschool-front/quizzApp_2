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
					questions: {
						method: 'GET',
						url: appSettings.serverPath + '/test/:id',
						isArray: false
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
					},
					available: {
						method: 'GET',
						url: appSettings.serverPath + '/test/available',
						isArray: true
					},					
					
				});
		
		}

		
})();
