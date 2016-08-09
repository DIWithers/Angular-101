var toDoApp = angular.module("toDoApp", []);

toDoApp.controller("toDoController", function($scope) {
	var toDoList = [];
	$scope.toDoList = [];
	
	

	$scope.addToDo = function() {
		$scope.toDoList.push({title: $scope.itemTitle, desc: $scope.itemDesc, deadline: $scope.itemDeadline, done: false})
		
	}

	$scope.strike = function(index) {
		$scope.toDoList.done = true;


		}

	$scope.remove = function(index) {
		$scope.toDoList.splice(index, 1);
	}

});
