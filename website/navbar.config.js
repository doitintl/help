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

module.exports = items;
