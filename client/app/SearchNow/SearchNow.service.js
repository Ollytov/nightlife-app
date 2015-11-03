'use strict';

angular.module('nightlifeAppBasejumpApp')
	.factory('SearchNow', function($http, $q) {
		return {
			addvalue: function(loc) {
				var defer = $q.defer();
				$http.post('/api/search/loc/'+loc).then(
					function successCallback(response) {
						console.log(response);
					}, 
					function errorCallback() {
						console.log('There was an error.');
					}
				);
				return defer.promise;
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
				var defer = $q.defer();
				$http.post('/api/users/add/'+userid, loc).then(
					function successCallback(response) {
						console.log(response);
					}, 
					function errorCallback() {
						console.log('There was an error with the post request.');
					}
				);
				return defer.promise;
			}
		};
	});
