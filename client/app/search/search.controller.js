'use strict';

angular.module('nightlifeAppBasejumpApp')
	.controller('SearchCtrl', function ($scope, $http, SearchNow, Auth) {

		$scope.isLoggedIn = Auth.isLoggedIn;

	    $scope.printSearch = function(value) {
	    	SearchNow.searchvalue(value);
	    	SearchNow.findsearch(value).then(function(search){
	    		$scope.locations = search.locations;
	    		console.log($scope.locations);

	    	});
	    };
	});

