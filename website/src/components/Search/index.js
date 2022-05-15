import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import algoliasearch from 'algoliasearch/lite';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const Search = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <DocSearch
      appId={customFields.ALGOLIA_APP_ID}
      indexName={customFields.INDEX_NAME}
      apiKey={customFields.ALGOLIA_API_KEY}
    />
  );
};

export default Search;
