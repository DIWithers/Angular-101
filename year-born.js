var yearBornApp = angular.module("yearBornApp", []);
yearBornApp.controller("ageController", function($scope) {
	$scope.calculateYearBorn = function () {
	var d = new Date();
	var thisYear = d.getFullYear();
	var yearBorn;
	$scope.yearBorn = thisYear - $scope.myAge;
	
	}

});