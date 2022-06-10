import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function JsonLd() {
  const { siteConfig } = useDocusaurusContext();
  const doitConfig = siteConfig.customFields.doitConfig;

  const orgJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: doitConfig.companyNameFull,
    sameAs: [
      doitConfig.helpUrl,
      doitConfig.developerUrl,
      doitConfig.blogUrl,
      doitConfig.ghOrgUrl,
      doitConfig.linkedInUrl,
      doitConfig.youTubeUrl,
      doitConfig.twitterUrl,
      doitConfig.facebookUrl,
      doitConfig.feedbackUrl,
    ],
    url: doitConfig.homeUrl,
    logo: doitConfig.helpUrl + 'favicon-194x194.png',
  };

  const websiteJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: doitConfig.helpUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: doitConfig.helpUrl + '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const completeJson = [orgJson, websiteJson];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(completeJson) }}
    />
  );
}
