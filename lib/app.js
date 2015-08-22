	var app = angular.module("ColourManagement", []);

	app.controller("MyGameController", function($scope) {
		$scope.no_of_rows = 4;
		$scope.no_of_cols = 4;		
		$scope.availableCards = ['colour1', 'colour2','colour3','colour4','colour5','colour6','colour7','colour8'];
		$scope.isRemoved="true";
		$scope.isShown ="true";
		$scope.bg_colour = "../images/card_bg.gif"
		$scope.cards = [
		    {
			 images: [
		        "../images/colour5.gif",		
				"../images/colour2.gif",		
				"../images/colour4.gif",
				"../images/colour1.gif",
		      ] 
		    },
		    {
			   images: [
		    	"../images/colour4.gif",
				"../images/colour3.gif",
				"../images/colour7.gif",
				"../images/colour8.gif",
				]
		    },
			{
			 images: [
		        "../images/colour7.gif",
				"../images/colour3.gif",
				"../images/colour6.gif",
				"../images/colour2.gif",
				
		      ] 
		    },
		    {
			   images: [
		    	"../images/colour8.gif",
				"../images/colour6.gif",
				"../images/colour1.gif",
				"../images/colour5.gif",
				]
		    }
		];

		$scope.select = function(){
			//random and return the colour card
			for(var i=0; i< 8;i++){
				var randomColour = Math.floor(Math.random()*$scope.availableCards.length)
				var colour = $scope.availableCards[randomColour];
				$scope.bg_colour="../images/" + colour + ".gif";
				$scope.$apply();
				console.log(colour);
				$scope.availableCards.splice(randomColour,1);
			}
		};
	});

	