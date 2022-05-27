import React from 'react';
import LinkList from '../LinkList';

import styles from './styles.module.css';

const listsRow1 = [
  {
    heading: 'Dashboards and widgets',
    links: [
      {
        text: 'Widgets overview',
        href: '/docs/dashboards/widgets-overview',
      },
      {
        text: 'Adding reports to a dashboard',
        href: '/docs/dashboards/add-reports-to-dashboards',
      },
      {
        text: 'Customizing dashboards',
        href: '/docs/dashboards/customizing-dashboards',
      },
      {
        text: 'Creating a new dashboard',
        href: '/docs/dashboards/creating-a-new-dashboard',
      },
    ],
  },
  {
    heading: 'Services',
    links: [
      {
        text: 'Consulting and support',
        href: '/docs/services/consulting-support',
      },
      {
        text: 'Shared Slack channel',
        href: '/docs/services/consulting-support/shared-slack-channel',
      },
      {
        text: 'Cloud incidents',
        href: '/docs/services/consulting-support/cloud-incidents',
      },
      {
        text: 'Training',
        href: '/docs/services/training',
      },
      {
        text: 'Professional services',
        href: '/docs/services/proserv',
      },
      {
        text: 'Perks',
        href: '/docs/services/perks',
      },
    ],
  },
  {
    heading: 'Asset management',
    links: [
      {
        text: 'Create a Google Cloud billing account',
        href: 'docs/google-cloud/create-google-cloud-billing-account',
      },
      {
        text: 'Create an AWS account',
        href: '/docs/amazon-web-services/create-an-aws-account',
      },
      {
        text: 'Invite an existing AWS account',
        href: '/docs/amazon-web-services/invite-existing-aws-account',
      },
      {
        text: 'Purchasing G Suite licenses',
        href: '/docs/g-suite-and-workspace/purchasing-g-suite-licenses',
      },
      {
        text: 'Purchasing Office 365 licenses',
        href: '/docs/microsoft-office-365/purchasing-office-365-licenses',
      },
    ],
  },
];

const LearnMore = () => {
  return (
    <section className={styles.learn_more}>
      <div className="container">
        <h2>Learn more</h2>
        <div className="row">
          {listsRow1.map((list, i) => (
            <LinkList key={i} list={list}></LinkList>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LearnMore;
