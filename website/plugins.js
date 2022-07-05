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
        sizes: '48x48',
        href: '/favicon.ico',
      },
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icon-192x192.png',
      },
      {
        tagName: 'link',
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/icon-512x512.png',
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
        href: '/icon-180x180.png',
      },
      {
        tagName: 'link',
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#fc2a5a',
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
        content: '#ffffff',
      },
      {
        tagName: 'meta',
        name: 'msapplication-config',
        content: '/browserconfig.xml',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileColor',
        content: 'fc2a5a',
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
