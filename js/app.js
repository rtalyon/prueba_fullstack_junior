var app=angular.module('raul',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/home.html',
		controller:'IndexCtrl',
	})

	.otherwise({
		redirectTo:'/'
	});
}]);	