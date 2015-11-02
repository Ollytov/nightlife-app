'use strict';

angular.module('nightlifeAppBasejumpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('attending', {
        url: '/attending',
        templateUrl: 'app/attending/attending.html',
        controller: 'AttendingCtrl',
        authenticate: true
      });
  });