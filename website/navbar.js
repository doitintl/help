const doit = require('./doit.js');

const items = [
  {
    type: 'docSidebar',
    sidebarId: 'cmpSideBar',
    position: 'left',
    label: 'Cloud Management Platform',
  },
  {
    href: doit.developerUrl,
    position: 'left',
    label: 'Developer Hub',
  },
  {
    href: doit.appUrl,
    position: 'right',
    label: 'Log in to the CMP',
  },
  {
    href: doit.ghProjectUrl,
    position: 'right',
    className: 'header-github-link',
    'aria-label': 'GitHub repository',
  },
];

const navbar = {
  title: doit.siteName,
  hideOnScroll: true,
  logo: {
    alt: doit.companyName,
    // TODO: Why can't we `require()` these files?
    src: 'common/images/doit-logo-black.svg',
    srcDark: 'common/images/doit-logo-white.svg',
    width: 32,
    height: 32,
  },
  items: items,
};

module.exports = navbar;
