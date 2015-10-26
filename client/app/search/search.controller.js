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
	    	console.log("Starting First Function");
	    	SearchNow.addvalue(value);
	    	$timeout(function() {
		    	SearchNow.findsearch(value).then(function(search){
	    			$scope.locations = search.locations;
	    		});
		    }, 1000);
	    };

	    $scope.addFavorite = function(userid) {
	    	SearchNow.addFavorite(currentUser._id);
	    };

	});

