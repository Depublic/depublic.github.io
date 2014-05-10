var app = angular.module("myApp" , ['ngRoute']);


app.controller('NameCtrl', ['$scope', function ($scope) {

	$scope.albums = [
		{ albumname : "The Silence In Your Head", year : "2014"},
	];

	$scope.songs = [
		{ name : "Out Of Control" },
		{ name : "Cream" },
		{ name : "Whatever Comes Tomorrow" },
		{ name : "Things We Lost" },
		{ name : "The Promise" },
		{ name : "Alone" },
		{ name : "The War Lives On " },
		{ name : "Your Shadow" },
		{ name : "Fed Up" },
		{ name : "7 Days" },
		{ name : "Slow Down" },
		{ name : "Bridges You Have Burned" },
		{ name : "Forplay" },
		{ name : "Lap Dance" }
	];

	$scope.members = [
		{ name : "Andri Eyvindsson" },
		{ name : "Aron Örn Brynjólfsson" },
		{ name : "Einir Guðlaugsson" },
		{ name : "Viktor Smári Ágústuson" },
	];
	
	$scope.websites = [

		{ name: "Youtube" , url: "http://www.youtube.com/depublicmusic"},
		{ name: "Facebook" , url: "http://www.facebook.com/depublic"},
		{ name: "Google+" , url: "https://plus.google.com/106817930478334086312/about"},

	];

}]);

 
app.controller('RouteCtrl', ['$scope', function ($scope) {
	
}]);


app.config(['$routeProvider',
 function ($routeProvider) {
 	$routeProvider
 	.when('/pizza', {

 		templateUrl : 'route.html',
 		controller : 'RouteCtrl'
 	})
	
}])