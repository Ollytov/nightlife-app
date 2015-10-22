'use strict';

angular.module('nightlifeAppBasejumpApp')
	.controller('SearchCtrl', function ($scope, $http, SearchNow) {
	    $scope.printSearch = function(value) {
	    	SearchNow.printval(value);
	    };
	});

