'use strict';

describe('Service: SearchNow', function () {

  // load the service's module
  beforeEach(module('nightlifeAppBasejumpApp'));

  // instantiate service
  var SearchNow;
  beforeEach(inject(function (_SearchNow_) {
    SearchNow = _SearchNow_;
  }));

  it('should do something', function () {
    expect(!!SearchNow).toBe(true);
  });

});
