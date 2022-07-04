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
      // activates for users with `navigator.connection.saveData === true`
      // 'saveData'
      // Activates for all users
      'always',
    ],
    injectManifestConfig: {
      globIgnores: [
        'assets/css/*',
        'assets/files/*',
        'assets/ideal-img/*',
        'assets/images/*',
        'assets/js/*',
        'cgi-bin/*',
        'cgi-bin/**/*',
        'docs/*',
        'docs/**/*',
        '*.ico',
        '*.png',
        '*.svg',
      ],
    },
    pwaHead: [
      {
        tagName: 'link',
        rel: 'icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '48x48',
      },
      {
        tagName: 'link',
        rel: 'icon',
        href: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        tagName: 'link',
        rel: 'icon',
        href: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        tagName: 'link',
        rel: 'icon',
        href: '/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        tagName: 'link',
        rel: 'icon',
        href: '/icon-512x512.png',
        type: 'image/png',
        sizes: '512x512',
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
        content: 'default',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileColor',
        content: '#ffffff',
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

const plugins = [pluginPwa]; // pluginIdealImage

module.exports = plugins;
