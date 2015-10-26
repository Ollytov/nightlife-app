'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://meanuser:meanpass@ds041924.mongolab.com:41924/heroku_q6k6h7hn'
  },
  yelp: {
  	consumer_key: "KJpC3VtMQCKj6jWtb5zQJg", 
  	consumer_secret: "xfI3cTQdjCJVA_R9aYtvaClyTUs",
  	token: "xXGp1FO_rMVn902wFIKIUHYUQ_KwdgBW",
  	token_secret: "bJootg2dT37Ue_4xwZyKXcs2fG0"
  },

  seedDB: true
};
