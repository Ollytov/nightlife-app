'use strict';

angular.module('nightlifeAppBasejumpApp')
	.factory('SearchNow', function($http) {
		return {
			addvalue: function(loc) {
				$http.get('/api/search/loc/'+loc).then(
					function successCallback(response) {
						console.log('The search was successful!!!');
					}, 
					function errorCallback() {
						console.log('There was an error.');
					}
				);
			},
			findsearch: function(loc) {
				return $http.get('/api/search').then(
					function successCallback(response) {
						for (var i = 0; i < response.data.length; i++) {
							if (response.data[i].query === loc) {
								console.log(response.data[i]);
								return response.data[i];
							}
						}
					}, 
					function errorCallback() {
						console.log('There was an error.');
					}
				);
			},
			addFavorite: function(userid, loc) {
				$http.get('/api/users/add/'+userid).then(
					function successCallback(response) {
						console.log('The user update was successful!!!');
					}, 
					function errorCallback() {
						console.log('There was an error.');
					}
				);
			},

		}
	});
