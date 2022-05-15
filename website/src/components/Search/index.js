import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const Search = () => (
  // Disabled because it causes the index page to crash
  /*
  <DocSearch
    appId={process.env.ALGOLIA_APP_ID}
    indexName={process.env.INDEX_NAME}
    apiKey={process.env.ALGOLIA_API_KEY}
  />
  */
  <div />
);

export default Search;
