'use strict';

angular.module('nightlifeAppBasejumpApp')
  .controller('AttendingCtrl', function ($scope, $timeout, Auth, User) {
    $scope.getCurrentUser = Auth.getCurrentUser;

	var user = $scope.getCurrentUser()._id;
	Auth.getFavorites(user).then(function(favorites){
		$scope.favorites = favorites.data.favorites;
	});


  });
