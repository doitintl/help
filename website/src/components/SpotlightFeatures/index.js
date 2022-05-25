import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import logoBlackUrl from '../../../static/images/doit-logo-black.png';
import logoWhiteUrl from '../../../static/images/doit-logo-white.png';

import ThemedImage from '@theme/ThemedImage';

const featureList = [
  {
    title: 'Under construction',
    description: 'This is a preview of the DoiT International Help Center.',
    link: {
      text: 'This is a link',
      href: '/test',
    },
  },
  {
    title: 'Under construction',
    description: 'This is a preview of the DoiT International Help Center.',
    link: {
      text: 'This is a link',
      href: '/test',
    },
  },
  {
    title: 'Under construction',
    description: 'This is a preview of the DoiT International Help Center.',
    link: {
      text: 'This is a link',
      href: '/test',
    },
  },
];

const Feature = ({ title, description, link }) => (
  <div className={`col ${styles.feature}`}>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>
      <a href={link.href}>{link.text}</a>
    </p>
  </div>
);

const SpotlightFeatures = () => (
  <section className={styles.spotlight_features}>
    <div className="container">
      <h1>Spotlight features</h1>
      <div className="row">
        {featureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default SpotlightFeatures;
