'use strict';

var _ = require('lodash');
var Search = require('./search.model');

var yelp = require("yelp").createClient({
  consumer_key: "KJpC3VtMQCKj6jWtb5zQJg", 
  consumer_secret: "xfI3cTQdjCJVA_R9aYtvaClyTUs",
  token: "xXGp1FO_rMVn902wFIKIUHYUQ_KwdgBW",
  token_secret: "bJootg2dT37Ue_4xwZyKXcs2fG0"
});

exports.search = function(req, res) {
  Search.findOne({query: req.params.loc}, function(err, search) {
    console.log(search);
    if (!search) {
      yelp.search({term: "food", location: req.params.loc}, function(error, data) {
        console.log("Yelp Search For " + req.params.loc);
        var newSearch = new Search({
          query: req.params.loc,
          locations: data.businesses
        }).save(function(err) {if (err) return handleError(res, err)})
        console.log("New Search Has been Saved!");
      });
    }
  });
}

exports.checkSearch = function(search, next) {
  Search.findOne({query: search}, function(err, search) {
    next(err, search);
  });
}

exports.findSearch = function(req, res) {
  Search.findOne({query: req.params.val}, function(err, search) {
    console.log(search);
  });
}

exports.findFavorite = function(req, res) {
  Search.findOne({query: req.params.val}, function(err, search) {
    Search.findOne({locations: req.params.loc}, function(err, search) {
      console.log(search);
    });
  });
}


// Get list of searchs
exports.index = function(req, res) {
  Search.find(function (err, searchs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(searchs);
  });
};

// Get a single search
exports.show = function(req, res) {
  Search.findById(req.params.id, function (err, search) {
    if(err) { return handleError(res, err); }
    if(!search) { return res.status(404).send('Not Found'); }
    return res.json(search);
  });
};

// Creates a new search in the DB.
exports.create = function(req, res) {
  Search.create(req.body, function(err, search) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(search);
  });
};

// Updates an existing search in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Search.findById(req.params.id, function (err, search) {
    if (err) { return handleError(res, err); }
    if(!search) { return res.status(404).send('Not Found'); }
    var updated = _.merge(search, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(search);
    });
  });
};

// Deletes a search from the DB.
exports.destroy = function(req, res) {
  Search.findById(req.params.id, function (err, search) {
    if(err) { return handleError(res, err); }
    if(!search) { return res.status(404).send('Not Found'); }
    search.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}