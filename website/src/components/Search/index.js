import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const Search = () => {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  return (
    <DocSearch
      appId={themeConfig.algolia.appId}
      indexName={themeConfig.algolia.indexName}
      apiKey={themeConfig.algolia.apiKey}
      getMissingResultsUrl={({ query }) => {
        return `https://github.com/doitintl/help/issues/new?title=${query}`;
      }}
    />
  );
};

export default Search;
