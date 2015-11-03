'use strict';

angular.module('nightlifeAppBasejumpApp')
	.controller('SearchCtrl', function ($scope, $http, $timeout, $cookieStore, SearchNow, Auth, User) {
		$scope.isLoggedIn = Auth.isLoggedIn;
		var currentUser = {};
		if($cookieStore.get('token')) {
	      currentUser = User.get();
	    }
	    var target = document.getElementById('loading');
		var spinner = new Spinner({scale: 0.75});

	    $scope.printSearch = function(value) {
	    	spinner.spin(target);
	    	if (value === undefined) return console.log("There was an error! Oh no!"); 
	    	SearchNow.addvalue(value);
	    	$timeout(function() {
		    	SearchNow.findsearch(value).then(function(search){
		    		if (search === undefined) return console.log("An Error Has Occurred");
	    			$scope.locations = search.locations;
	    			spinner.stop();
	    		});
		    }, 1000);
	    };

	    $scope.addFavorite = function(loc) {
	    	var fav = $scope.locations.filter(function(obj) {
	    		return obj.name === loc;
	    	});
	    	fav = JSON.stringify(fav[0]);
	    	SearchNow.addFavorite(currentUser._id, fav);

	    };

	});

