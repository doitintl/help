/**
Creating a sidebar enables you to:

- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
*/

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cmpSideBar: [
    'cmp',
    {
      type: 'category',
      label: 'General',
      items: [{ type: 'autogenerated', dirName: 'general' }],
    },
    {
      type: 'category',
      label: 'Dashboards and widgets',
      items: [{ type: 'autogenerated', dirName: 'dashboards' }],
    },
    {
      type: 'category',
      label: 'Cloud Analytics',
      items: [{ type: 'autogenerated', dirName: 'cloud-analytics' }],
    },
    {
      type: 'category',
      label: 'Flexsave',
      items: [{ type: 'autogenerated', dirName: 'flexsave' }],
    },
    {
      type: 'category',
      label: 'Spot Scaling',
      items: [{ type: 'autogenerated', dirName: 'spot-scaling' }],
    },
    {
      type: 'category',
      label: 'Cloud Sandbox management',
      items: [
        { type: 'autogenerated', dirName: 'cloud-sandbox-management' },
      ],
    },
    {
      type: 'category',
      label: 'Anomaly detection',
      items: [{ type: 'autogenerated', dirName: 'anomaly-detection' }],
    },
    {
      type: 'category',
      label: 'Services',
      items: [{ type: 'autogenerated', dirName: 'services' }],
    },
    {
      type: 'category',
      label: 'Google Cloud Platform',
      items: [{ type: 'autogenerated', dirName: 'google-cloud' }],
    },
    {
      type: 'category',
      label: 'Amazon Web Services',
      items: [{ type: 'autogenerated', dirName: 'amazon-web-services' }],
    },
    {
      type: 'category',
      label: 'G Suite and Google Workspace',
      items: [{ type: 'autogenerated', dirName: 'g-suite-and-workspace' }],
    },
    {
      type: 'category',
      label: 'Microsoft Office 365',
      items: [{ type: 'autogenerated', dirName: 'microsoft-office-365' }],
    },
    {
      type: 'category',
      label: 'Assets and contracts',
      items: [{ type: 'autogenerated', dirName: 'assets-and-contracts' }],
    },
    {
      type: 'category',
      label: 'Invoices and payments',
      items: [{ type: 'autogenerated', dirName: 'invoices-and-payments' }],
    },
    {
      type: 'category',
      label: 'User management',
      items: [{ type: 'autogenerated', dirName: 'user-management' }],
    },
    {
      type: 'category',
      label: 'Vendor information',
      items: [{ type: 'autogenerated', dirName: 'vendor-information' }],
    },
    {
      type: 'category',
      label: 'APIs',
      items: [{ type: 'autogenerated', dirName: 'apis' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [{ type: 'autogenerated', dirName: 'tutorials' }],
    },
  ],
};

module.exports = sidebars;
