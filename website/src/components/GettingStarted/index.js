import React from 'react';
import IconCard from '../IconCard';
import cmpIcon from '../../../static/images/cmp-icon.svg';
import devHubIcon from '../../../static/images/dev-hub-icon.svg';
import styles from './styles.module.css';

// TODO: Resolve partial duplication of `navbar` configuration
const cards = [
  {
    title: 'Cloud Management Platform',
    image: cmpIcon,
    href: '/docs/cmp',
    target: '',
  },
  {
    title: 'Developer Hub',
    image: devHubIcon,
    href: 'https://developer.doit-intl.com/',
    target: '_blank',
  },
];

const GettingStarted = () => (
  <section className={styles.getting_started}>
    <div className="container">
      <h1>Getting Started</h1>
      <div className="row">
        {cards.map((card, i) => (
          <IconCard key={i} card={card} />
        ))}
      </div>
    </div>
  </section>
);

export default GettingStarted;
