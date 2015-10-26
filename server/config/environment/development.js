'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://meanuser:meanpass@ds045614.mongolab.com:45614/heroku_ncsrncql'
  },
  yelp: {
  	consumer_key: "KJpC3VtMQCKj6jWtb5zQJg", 
  	consumer_secret: "xfI3cTQdjCJVA_R9aYtvaClyTUs",
  	token: "xXGp1FO_rMVn902wFIKIUHYUQ_KwdgBW",
  	token_secret: "bJootg2dT37Ue_4xwZyKXcs2fG0"
  },

  seedDB: true
};
