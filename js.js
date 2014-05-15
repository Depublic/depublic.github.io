var app = angular.module("myApp" , ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when("/einir",{
		templateUrl : "templates/einir.tpl.html"
	}).when("/aron", {
		templateUrl: 'templates/aron.tpl.html',
      	// controller: 'HomeController'
	}).when("/viktor", {
		templateUrl: 'templates/viktor.tpl.html',
      	// controller: 'CreateController'
	}).when("/andri", {
		templateUrl: 'templates/andri.tpl.html',
      	// controller: 'ExamController'
	}).otherwise({ redirectTo: '/' });
}])

app.controller('NameCtrl', ['$scope',  function ($scope) {

	$scope.title = "Depublic Music";

	$scope.albums = [
		{ albumname : "The Silence In Your Head", year : "2014"},
	];

	$scope.songs = [
		{ name : "Out Of Control" },
		{ name : "Scream" },
		{ name : "Whatever Comes Tomorrow" },
		{ name : "Sign Of A Fallen Angel" },
		{ name : "Lost It All" },
		{ name : "The Promise I Made To You" },
		{ name : "The War Lives On" },
		{ name : "7 Days" },
		{ name : "Your Shadow" },
		{ name : "Fed Up" },
		{ name : "The Bridges You Have Burned" },
		{ name : "Slow Down!" },
		{ name : "Forplay" },
		{ name : "Lap Dance" }
	];

	$scope.members = [
		{ name : "Andri Eyvindsson", url: "#andri" },
		{ name : "Aron Örn Brynjólfsson", url: "#aron" },
		{ name : "Einir Guðlaugsson", url: "#einir" },
		{ name : "Viktor Smári Ágústuson", url: "#viktor" },
	];
	
	$scope.websites = [

		{ name: "Youtube" , url: "http://www.youtube.com/depublicmusic"},
		{ name: "Facebook" , url: "http://www.facebook.com/depublic"},
		{ name: "Google+" , url: "https://plus.google.com/106817930478334086312/about"},

	];

}]);


app.controller('AppCtrl',function ($scope) {
	$scope.model = {
		message :"yea"
	}
});