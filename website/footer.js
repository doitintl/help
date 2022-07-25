const doit = require('./doit.js');

const colSupport = {
  title: 'Support and consulting',
  items: [
    {
      label: 'Changelog',
      href: doit.changelogUrl,
    },
    {
      label: 'Feature requests',
      href: doit.feedbackUrl,
    },
    {
      label: 'Open a ticket',
      href: doit.supportUrl,
    },
    {
      label: 'Technical support',
      href: doit.servicesUrl + 'managed-support-msp/',
    },
    {
      label: 'Technical consulting',
      href: doit.servicesUrl + '#cloud-consulting-engineering',
    },
    {
      label: 'Support stats',
      href: doit.statsUrl,
    },
  ],
};

const colDiscover = {
  title: 'Discover',
  items: [
    {
      label: 'Homepage',
      href: doit.homeUrl,
    },
    {
      label: 'Blog',
      href: doit.blogUrl,
    },
    {
      label: 'GitHub',
      href: doit.ghOrgUrl,
    },
    {
      label: 'LinkedIn',
      href: doit.linkedInUrl,
    },
    {
      label: 'YouTube',
      href: doit.youTubeUrl,
    },
    {
      label: 'Twitter',
      href: doit.twitterUrl,
    },
    {
      label: 'Facebook',
      href: doit.facebookUrl,
    },
  ],
};

const vendorDocsUrl = '/docs/vendor-information';

const colCompany = {
  title: 'Company',
  items: [
    {
      label: 'Vendor information',
      to: vendorDocsUrl + '/general-vendor-information',
    },
    {
      label: 'Security and data access policy',
      to:
        vendorDocsUrl +
        '/security-and-data-access-policy-for-cloud-management-platform',
    },
    {
      label: 'External services we use',
      to: vendorDocsUrl + '/external-services',
    },
    {
      label: 'Exchange rates',
      to: vendorDocsUrl + '/exchange-rates',
    },
    {
      label: 'Our subprocessors',
      href: vendorDocsUrl + '/subprocessors',
    },
    {
      label: 'Compliance',
      href: doit.complianceUrl,
    },
  ],
};

const footer = {
  style: 'dark',
  logo: {
    alt: doit.companyName,
    src: '/logo-white.png',
    href: doit.homeUrl,
    width: 160,
    height: 75.5,
  },
  links: [colSupport, colDiscover, colCompany],
};

module.exports = footer;
