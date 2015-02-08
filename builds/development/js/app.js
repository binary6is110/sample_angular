var myApp=angular.module('sampleApp',['ngRoute','appControllers']);
var appControllers=angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html'
		}).
		when('/register', {
			templateUrl: 'views/register.html'
		}).
		when('/meetings', {			
			templateUrl: 'views/meeting.html'
		})
}])
