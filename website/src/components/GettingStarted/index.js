import React from 'react';
import IconCard from '../IconCard';
import cmpIcon from '../../../static/img/cmp-icon.svg';
import devHubIcon from '../../../static/img/dev-hub-icon.svg';
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
      <h2>Getting Started</h2>
      <div className="row">
        {cards.map((card, i) => (
          <IconCard key={i} card={card} />
        ))}
      </div>
    </div>
  </section>
);

export default GettingStarted;
