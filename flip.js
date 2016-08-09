var coinFlipApp = angular.module("coinFlipApp", []);
coinFlipApp.controller("headsOrTailsController", function($scope) {
	$scope.test = "TESTING!";


	// IF IT IS NOT LOCATED IN HTML - YOU DON'T NEED $SCOPE 

	// The user clicked on heads - ng-click="heads" in the view
	$scope.heads = function() {
		
		$scope.UserGuess = "heads";
		var flipResult = flip();
		$scope.guess = true;
		if (flipResult.coinFlipResult === "heads") {
			$scope.message = "You won!";
		}
		else {
			$scope.message = "You lost";
		}
		$scope.coin = flipResult.coinImg;
		

	}

	// The user clicked on tails - ng-click="tails" in the view
	$scope.tails = function() {
		$scope.userGuess = "tails";
		var flipResult = flip();
		$scope.guess = true;
		if (flipResult.coinFlipResult === "tails") {
			$scope.message = "You won!";
		}
		else {
			$scope.message = "You lost";
		}
		$scope.coin = flipResult.coinImg;
		
		

	}

	// The user clicked on playGame - ng-click="playGame" in the view
	$scope.playGame = function() {
		console.log("test play");
		$scope.guess = false;
		$scope.message = null;
		coinFlipResult = null;
	}

	var flip = function() {
		var rand = Math.random();
		var flipResult  = {
			coinImg: null,
			coinFlipResult: null,
			message: null
		}
		if (rand > .5) {
			flipResult.coinImg = "quarter-front.png";
			flipResult.coinFlipResult = "heads";
		}
		else {
			flipResult.coinImg = "quarter-back.png";
			flipResult.coinFlipResult = "tails";
		}
		return flipResult;
	}

});