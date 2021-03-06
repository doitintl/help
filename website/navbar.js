const doit = require('./doit.js');

const items = [
  {
    type: 'docSidebar',
    sidebarId: 'cmpSideBar',
    position: 'left',
    label: 'Cloud Management Platform',
  },
  {
    type: 'docSidebar',
    sidebarId: 'flexsaveSideBar',
    position: 'left',
    label: 'Flexsave',
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
    src: '/logo-hero.png',
    height: 32,
    width: 67.5,
  },
  items: items,
};

module.exports = navbar;
