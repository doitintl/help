// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DoiT Help Center',
  tagline: 'How can we help?',
  url: process.env.URL || 'http://localhost:3000',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  onDuplicateRoutes: 'error',
  favicon: 'favicon.ico',
  organizationName: 'doitintl',
  projectName: 'help',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/doitintl/help/tree/main/website/docs',
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Disable dark mode switch
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Help Center',
        hideOnScroll: true,
        logo: {
          alt: 'DoiT International',
          src: 'images/doit-logo-black.svg',
          srcDark: 'images/doit-logo-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cmpSideBar',
            position: 'left',
            label: 'Cloud Management Platform',
          },
          {
            href: 'https://developer.doit-intl.com/',
            position: 'left',
            label: 'Developer Hub',
          },
          {
            href: 'https://app.doit-intl.com/',
            position: 'right',
            label: 'Log in to the CMP',
          },
          {
            href: 'https://github.com/doitintl/help',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'DoiT',
          src: 'images/doit-logo-white.svg',
          href: 'https://www.doit-intl.com/',
          width: 100,
        },
        links: [
          {
            title: 'Support and consulting',
            items: [
              {
                label: 'Feature requests',
                href: 'https://feedback.doit-intl.com/',
              },
              {
                label: 'Open a ticket',
                href: 'https://app.doit-intl.com/support',
              },
              {
                label: 'Technical support',
                href: 'https://doit-intl.com/services/managed-support-msp/',
              },
              {
                label: 'Technical consulting',
                href: 'https://doit-intl.com/services/#cloud-consulting-engineering',
              },
              {
                label: 'Support stats',
                href: 'https://doit-intl.com/stats/',
              },
            ],
          },
          {
            title: 'Discover',
            items: [
              {
                label: 'Homepage',
                href: 'https://doit-intl.com/',
              },
              {
                label: 'Blog',
                href: 'https://blog.doit-intl.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/doitintl',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/doitintl',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/MultiCloudEngineering',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/doitint',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/DoIT.International/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Vendor information',
                to: '/docs/vendor-information/general-vendor-information',
              },
              {
                label: 'Data access policy',
                to: '/docs/vendor-information/security-and-data-access-policy-for-cloud-management-platform',
              },
              {
                label: 'External services we use',
                to: '/docs/vendor-information/external-services',
              },
              {
                label: 'Exchange rates',
                to: '/docs/vendor-information/exchange-rates',
              },
              {
                label: 'Our subprocessors',
                href: '/docs/vendor-information/subprocessors',
              },
              {
                label: 'Compliance',
                href: 'https://doit-intl.com/compliance/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['shell-session', 'java'],
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.INDEX_NAME,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        // https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
    }),
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],
  customFields: {
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    INDEX_NAME: process.env.INDEX_NAME,
  },
};

module.exports = config;
