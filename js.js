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
		{
			name : "Out Of Control",
			songurl : "wav/01_Out_Of_Control.wav",
			lyrics : "lyrics/OutOfControl.txt" 
		},
		
		{
			name : "Scream", 
			songurl : "wav/02_Scream.wav",
			lyrics : "lyrics/Scream.txt"  
		},
		
		{
			name : "Whatever Comes Tomorrow", 
			songurl : "wav/03_Whatever_Comes_Tomorrow.wav",
			lyrics : "lyrics/WhateverComesTomorrow.txt"  
		},
		
		{
			name : "Sign Of A Fallen Angel", 
			songurl : "wav/04_Sign_Of_A_Fallen_Angel.wav",
			lyrics : "lyrics/SignOfAFallenAngel.txt"  
		},
		
		{
			name : "Lost It All", 
			songurl : "wav/05_Lost_It_All.wav",
			lyrics : "lyrics/LostItAll.txt"  
		},
		
		{
			name : "The Promise I Made To You", 
			songurl : "wav/06_The_Promise_I_Made_To_You.wav",
			lyrics : "lyrics/ThePromiseIMadeToYou.txt"  
		},
		
		{
			name : "The War Lives On", 
			songurl : "wav/07_The_War_Lives_On.wav",
			lyrics : "lyrics/TheWarLivesOn.txt"  
		},
		
		{
			name : "7 Days", 
			songurl : "wav/08_7_Days.wav",
			lyrics : "lyrics/SevenDays.txt"  
		},
		
		{
			name : "Your Shadow", 
			songurl : "wav/09_Your_Shadow.wav",
			lyrics : "lyrics/YourShadow.txt"  
		},
		
		{
			name : "Fed Up", 
			songurl : "wav/10_Fed_Up.wav",
			lyrics : "lyrics/FedUp.txt"  
		},
		
		{
			name : "The Bridges You Have Burned", 
			songurl : "wav/11_The_Bridges_You_Have_Burned.wav",
			lyrics : "lyrics/TheBridgesYouHaveBurned.txt"  
		},
		
		{
			name : "Slow Down!", 
			songurl : "wav/12_Slow_Down!.wav",
			lyrics : "lyrics/SlowDown.txt"  
		},
		
		{
			name : "Foreplay", 
			songurl : "wav/13_Foreplay.wav",
			// lyrics : "lyrics/.txt"  
		},
		
		{
			name : "Lap Dance", 
			songurl : "wav/14_Lap_Dance.wav",
			lyrics : "lyrics/LapDance.txt" 
		}
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
