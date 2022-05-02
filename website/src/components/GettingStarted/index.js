import React from 'react';
import IconCard from '../IconCard';
import logoBlackUrl from '../../../static/img/doit-logo-black.png';
import styles from './styles.module.css';

const cards = [
  {
    title: 'this is the title',
    image: logoBlackUrl,
    imageAlt: '',
  },
  {
    title: 'this is the title',
    image: logoBlackUrl,
    imageAlt: '',
  },
  {
    title: 'this is the title',
    image: logoBlackUrl,
    imageAlt: '',
  },
];

const GettingStarted = () => (
  <section className={styles.getting_started_container}>
    <h1 className={styles.getting_started}>Getting Started</h1>
    <div className={styles.cards_container}>
      {cards.map((card) => (
        <IconCard card={card} />
      ))}
    </div>
  </section>
);

export default GettingStarted;
