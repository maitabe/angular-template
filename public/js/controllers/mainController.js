app.controller('mainCtrl', ['$scope', 'someService', function($scope, someService) {




	someService.getAllData().then(function(){
		$scope.datas = someService.dataserv;
	});


}]);