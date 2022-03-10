// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DoiT Help Center',
  tagline: 'Dinosaurs are cool',
  url: 'https://help.doit-intl.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/doitintl/docs/tree/main/docusaurus/docs',
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
      announcementBar: {
        id: 'announcement',
        content:
          '&#9888;&#65039;&nbsp;' +
          'This is a preview of the next generation ' +
          'Doit International Help Center' +
          '&nbsp;&#9888;&#65039;',
        isCloseable: false,
      },
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
            type: 'docSidebar',
            sidebarId: 'superQuerySideBar',
            position: 'left',
            label: 'superQuery',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devHubSideBar',
            position: 'left',
            label: 'Developer Hub',
          },
        ],
      },
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
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
    }),
  plugins: [],
};

module.exports = config;
