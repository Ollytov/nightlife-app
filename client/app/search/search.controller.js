'use strict';

angular.module('nightlifeAppBasejumpApp')
	.controller('SearchCtrl', function ($scope, $http, SearchNow) {
	    $scope.printSearch = function(value) {
	    	SearchNow.searchvalue(value);
	    	SearchNow.findsearch(value).then(function(search){
	    		$scope.locations = search.locations;
	    		console.log($scope.locations);

	    	});
	    };
	});

