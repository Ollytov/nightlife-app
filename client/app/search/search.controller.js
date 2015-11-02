'use strict';

angular.module('nightlifeAppBasejumpApp')
	.controller('SearchCtrl', function ($scope, $http, $timeout, $cookieStore, SearchNow, Auth, User) {
		$scope.isLoggedIn = Auth.isLoggedIn;
		var currentUser = {};
		if($cookieStore.get('token')) {
	      currentUser = User.get();
	    }


		$scope.addSearch = function(value) {

			SearchNow.addvalue(value);
		}

	    $scope.printSearch = function(value) {
	    	SearchNow.addvalue(value);
	    	$timeout(function() {
		    	SearchNow.findsearch(value).then(function(search){
	    			$scope.locations = search.locations;
	    			console.log($scope.locations);
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

