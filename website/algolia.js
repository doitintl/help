require('dotenv').config();

const algolia = {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_API_KEY,
  indexName: process.env.INDEX_NAME,
};

module.exports = algolia;
