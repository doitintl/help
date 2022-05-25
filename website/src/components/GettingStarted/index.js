import React from 'react';
import IconCard from '../IconCard';
import logoBlackUrl from '../../../static/images/doit-logo-black.png';
import styles from './styles.module.css';

// TODO: Resolve partial duplication of `navbar` configuration
const cards = [
  {
    title: 'Cloud Management Platform',
    image: logoBlackUrl,
    imageAlt: '',
    href: '/docs/cmp',
  },
  {
    title: 'Developer Hub',
    image: logoBlackUrl,
    imageAlt: '',
    href: 'https://developer.doit-intl.com/',
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
