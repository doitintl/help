const doit = require('./doit.js');

const metadata = [
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: doit.siteTitle },
  { name: 'description', content: doit.defaultDesc },
  { name: 'og:description', content: doit.defaultDesc },
  { property: 'og:image:alt', content: doit.tagLine },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:site',
    content: doit.twitterUsername,
  },
  {
    name: 'twitter:creator',
    content: doit.twitterUsername,
  },
  { name: 'twitter:domain', content: doit.helpDomain },
  { property: 'twitter:image:alt', content: doit.tagLine },
];

module.exports = metadata;
