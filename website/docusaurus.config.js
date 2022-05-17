// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DoiT Help Center',
  tagline: 'Dinosaurs are cool',
  url: 'https://doitintl-help.netlify.app',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  onDuplicateRoutes: 'error',
  favicon: 'img/favicon.ico',
  organizationName: 'doitintl', // Usually your GitHub org/user name.
  projectName: 'help', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/doitintl/help/tree/main/website/docs',
          showLastUpdateTime: true,
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
      image: 'img/doit-logo-black-rect.png',
      navbar: {
        title: 'Help Center',
        hideOnScroll: false,
        logo: {
          alt: 'DoiT International',
          src: 'img/doit-logo-black.svg',
          srcDark: 'img/doit-logo-white.svg',
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
        links: [
          {
            title: 'Under construction',
            items: [
              {
                label: 'Example',
                to: '/example',
              },
              {
                label: 'Example',
                to: '/example',
              },
              {
                label: 'Example',
                to: '/example',
              },
              {
                label: 'Example',
                to: '/example',
              },
              {
                label: 'Example',
                to: '/example',
              },
            ],
          },
          {
            title: 'Under construction',
            items: [
              {
                label: 'Example',
                href: 'https://example.com/',
              },
              {
                label: 'Example',
                href: 'https://example.com/',
              },
              {
                label: 'Example',
                href: 'https://example.com/',
              },
            ],
          },
          {
            title: 'Under construction',
            items: [
              {
                label: 'Example',
                href: 'https://example.com/',
              },
              {
                label: 'Example',
                href: 'https://example.com/',
              },
              {
                label: 'Example',
                href: 'https://example.com/',
              },
              {
                label: 'Example',
                href: 'https://example.com/',
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
      /*
      // Disabled until the index page search bar can be styled independently
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.INDEX_NAME,
      },
      */
    }),
  plugins: [],
  customFields: {
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    INDEX_NAME: process.env.INDEX_NAME,
  },
};

module.exports = config;
