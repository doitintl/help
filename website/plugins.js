const doit = require('./doit.js');

const pluginPwa = [
  '@docusaurus/plugin-pwa',
  {
    debug: true,
    offlineModeActivationStrategies: [
      // Activates for users having installed the site as an app
      'appInstalled',
      // Activates for users running the app as standalone
      'standalone',
      // Activates if queryString contains offlineMode=true
      'queryString',
      // Activates for mobile users (width <= 996px)
      // 'mobile',
      // // activates for users with `navigator.connection.saveData === true`
      // 'saveData'
    ],
    pwaHead: [
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/favicon-16x16.png',
      },
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/favicon-32x32.png',
      },
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/favicon-194x194.png',
      },
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/android-chrome-192x192.png',
      },
      {
        tagName: 'link',
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        tagName: 'meta',
        name: 'application-name',
        content: doit.siteTitleAbbrev,
      },
      {
        tagName: 'meta',
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        tagName: 'link',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        tagName: 'link',
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#1a1c1e',
      },
      {
        tagName: 'meta',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        tagName: 'meta',
        name: 'apple-mobile-web-app-title',
        content: doit.siteTitle,
      },
      {
        tagName: 'meta',
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#000000',
      },
      {
        tagName: 'meta',
        name: 'msapplication-config"',
        content: '/browserconfig.xml',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileColor',
        content: '2b5797',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png',
      },
    ],
  },
];

const pluginIdealImage = [
  '@docusaurus/plugin-ideal-image',
  {
    min: 320,
    max: 2560,
    steps: 8,
    background: '#ffffff',
    placeholder: true,
    disableInDev: true,
  },
];

const plugins = [pluginIdealImage, pluginPwa];

module.exports = plugins;