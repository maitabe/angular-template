var app = angular.module('angularApp', ['ui.router' ]);

app.config(function($stateProvider, $urlRouterProvider){

	var somename = {
		name: 'somename',
		url: '/somename',
		templateUrl: 'templates/template.html',
	    controller: 'mainCtrl',

	};

	$stateProvider.state(somename);

	$urlRouterProvider.otherwise('/somename');



});

