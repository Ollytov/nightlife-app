'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://meanuser:meanpass@ds049084.mongolab.com:49084/heroku_2v410hhs'
  },
  yelp: {
  	consumer_key: "KJpC3VtMQCKj6jWtb5zQJg", 
  	consumer_secret: "xfI3cTQdjCJVA_R9aYtvaClyTUs",
  	token: "xXGp1FO_rMVn902wFIKIUHYUQ_KwdgBW",
  	token_secret: "bJootg2dT37Ue_4xwZyKXcs2fG0"
  },

  seedDB: true
};
