import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const featureListRow1 = [
  {
    title: 'Cloud analytics',
    description:
      'Build your own cloud analytics reports and share them with your team. \
      Group resources and their associated costs with custom attributions, \
      detect and analyze trends, forecast your cloud spend, and manage your \
      budgets.',
    link: '/docs/cmp#cloud-analytics',
  },
  {
    title: 'Rightsizing for Google Cloud',
    description:
      'Rightsizing for Google Cloud monitors resources across all of your \
      projects and makes automatic cost-savings recommendations. Identify and \
      deal with idle VMs in two clicks. Never pay for underutilized instances \
      again.',
    link: '/docs/dashboards/rightsizing-for-google-cloud',
  },
  {
    title: 'Flexsave',
    description:
      'Flexsave is your cloud co-pilot, dynamically maximizing your \
      cloud-compute discounts for AWS and Google Cloud without any of the \
      risks or limitations of long-term use commitments.',
    link: '/docs/flexsave/overview',
  },
];

const featureListRow2 = [
  {
    title: 'BigQuery Lens',
    description:
      'BigQuery Lens is your Swiss Army knife for highlighting inefficiencies \
      in your BigQuery usage. Zero-configuration analytics and smart \
      recommendations for your database administrators.',
    link: 'docs/dashboards/bigquery-lens',
  },
  {
    title: 'AWS Lens',
    description:
      'AWS Lens provides full visibility into your cloud finances with a \
      configurable analytics dashboard that allows you to monitor operations \
      and optimize costs.',
    link: '/docs/dashboards/aws-lens',
  },
  {
    title: 'Spot scaling',
    description:
      "Spot Scaling proactively monitors your AWS Auto-Scaling Groups (ASGs), \
      and uses sophisticated machine learning to replace some or all of an \
      ASG's on-demand EC2 instances with Spot Instances.",
    link: '/docs/spot-scaling/overview',
  },
];

const Feature = ({ title, description, link }) => (
  <div className={`col ${styles.feature}`}>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>
      <Link to={link}>Learn more&hellip;</Link>
    </p>
  </div>
);

const SpotlightFeatures = () => (
  <section className={styles.spotlight_features}>
    <div className="container">
      <h1>Spotlight features</h1>
      <div className="row">
        {featureListRow1.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
      <div className="row">
        {featureListRow2.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default SpotlightFeatures;
