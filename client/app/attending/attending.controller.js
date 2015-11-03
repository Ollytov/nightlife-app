'use strict';

angular.module('nightlifeAppBasejumpApp')
  .controller('AttendingCtrl', function ($scope, $state, $stateParams, $timeout, Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser;
    var target = document.getElementById('loading');
	var spinner = new Spinner({scale: 0.75}).spin(target);
	var user = $scope.getCurrentUser()._id;
	$scope.noFavorites = false;
	Auth.getFavorites(user).then(function(favorites){
		if (favorites.data.favorites.length === 0) {
			$scope.noFavorites = true;
			spinner.stop();
		}  else {
			$scope.noFavorites = false;
			$scope.favorites = favorites.data.favorites;
			spinner.stop();
		}
	});

	$scope.removeFavorite = function(name) {
		Auth.removeFavorite(user, name);
		
		$state.transitionTo($state.current, $stateParams, {
		    reload: true,
		    inherit: false,
		    notify: true
		});
	};


  });
