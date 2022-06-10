// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const navbarItems = require('./navbar.items.js');
const footerLinks = require('./footer.links.js');
const pluginPwa = require('./plugin.pwa.js');

const algoliaConfig = require('./config.algolia.js');
const doitConfig = require('./config.doit.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: doitConfig.siteTitleAbbrev,
  tagline: doitConfig.tagLine,
  url: doitConfig.helpUrl,
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  onDuplicateRoutes: 'error',
  favicon: 'favicon.ico',
  organizationName: doitConfig.ghOrg,
  projectName: doitConfig.ghProject,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: doitConfig.ghEditUrl,
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
      image: '/og-image.png',
      metadata: [
        { property: 'og:type', content: 'website' },
        { name: 'description', content: doitConfig.defaultDesc },
        { name: 'og:description', content: doitConfig.defaultDesc },
        { property: 'og:image:alt', content: doitConfig.tagLine },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:site',
          content: doitConfig.twitterUsername,
        },
        {
          name: 'twitter:creator',
          content: doitConfig.twitterUsername,
        },
        { name: 'twitter:domain', content: doitConfig.helpDomain },
        { property: 'twitter:image:alt', content: doitConfig.tagLine },
      ],
      announcementBar: {
        id: 'pride',
        content:
          '&#x1f3f3;&#xfe0f;&#x200d;&#x1f308; ' +
          'Celebrate Pride Month with DoiT: <wbr> Join our ' +
          '<a href="https://resources.doit-intl.com/pride-at-doit-2022">' +
          'Speaker Session with Briona Jenkins</a> on June 14th ' +
          '&#x1f3f3;&#xfe0f;&#x200d;&#x1f308;',
        isCloseable: false,
      },
      navbar: {
        title: doitConfig.siteName,
        hideOnScroll: true,
        logo: {
          alt: doitConfig.companyName,
          src: 'doit-logo-black.svg',
          srcDark: 'doit-logo-white.svg',
          width: 32,
          height: 32,
        },
        items: navbarItems,
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
          alt: doitConfig.companyName,
          src: 'doit-logo-white.svg',
          href: doitConfig.homeUrl,
          width: 100,
        },
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['shell-session', 'java'],
      },
      algolia: algoliaConfig,
      zoom: {
        selector: '.markdown :not(em) > img',
        // https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
    }),
  plugins: [require.resolve('docusaurus-plugin-image-zoom'), pluginPwa],
  customFields: {
    doitConfig: doitConfig,
    algoliaConfig: algoliaConfig,
  },
};

module.exports = config;
