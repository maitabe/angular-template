app.factory('someService', ['$http', function($http) {

	var mainService = {
		dataserv:[]
	};

	mainService.getAllData = function() {
		return $http.get('/somename').then(function(data) {
			console.log(data);
			angular.copy(data.data, mainService.dataserv);
		});
	};



	return mainService;

}]);