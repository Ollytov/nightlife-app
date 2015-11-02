'use strict';

describe('Controller: AttendingCtrl', function () {

  // load the controller's module
  beforeEach(module('nightlifeAppBasejumpApp'));

  var AttendingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttendingCtrl = $controller('AttendingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
