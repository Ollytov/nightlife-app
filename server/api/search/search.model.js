'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    service = require('./search.controller');

var SearchSchema = new Schema({
  query: String,
  locations: [],
  active: Boolean
});

SearchSchema.path("query").validate(function(value, next) {
	service.checkSearch(value, function(err, search) {
		if (err) return next(err);
		next(!search);
	});
});

module.exports = mongoose.model('Search', SearchSchema);