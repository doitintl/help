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
  <section className={styles.getting_started_container}>
    <h1 className={styles.getting_started}>Getting Started</h1>
    <div className={styles.cards_container}>
      {cards.map((card, i) => (
        <IconCard key={i} card={card} />
      ))}
    </div>
  </section>
);

export default GettingStarted;
