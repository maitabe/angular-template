app.directive('nameDirective', ['injectService', function(injectService) {

	return {
		restrict: 'AE',
		replace: true,
		templateUrl: '/templates/templateDirective.html'
	};

}]);