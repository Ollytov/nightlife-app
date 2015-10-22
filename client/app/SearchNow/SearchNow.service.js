'use strict';

angular.module('nightlifeAppBasejumpApp')
	.factory('SearchNow', function() {

		return {
			printval: function(value) {console.log('You Searched For: ' + value);}
		};

	});