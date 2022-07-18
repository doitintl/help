// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Site configuration
const doit = require('./doit.js');
const algolia = require('./algolia.js');
const metadata = require('./metadata.js');
const navbar = require('./navbar.js');
const footer = require('./footer.js');
const plugins = require('./plugins.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: doit.siteTitle,
  tagline: doit.tagLine,
  url: doit.helpUrl,
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'favicon.ico',
  organizationName: doit.ghOrg,
  projectName: doit.ghProject,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          editUrl: doit.ghEditUrl,
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
      image: '/preview.png',
      metadata: metadata,
      navbar: navbar,
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      footer: footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['shell-session', 'java'],
      },
      algolia: algolia,
      zoom: {
        selector: '.markdown :not(em) > img',
        // https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
    }),
  plugins: plugins,
  customFields: {
    doitConfig: doit,
    algoliaConfig: algolia,
  },
};

module.exports = config;
