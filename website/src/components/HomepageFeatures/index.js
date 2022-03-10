import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import logoBlackUrl from '../../../static/img/doit-logo-black.png';
import logoWhiteUrl from '../../../static/img/doit-logo-white.png';

import ThemedImage from '@theme/ThemedImage';

const FeatureList = [
  {
    title: 'Under construction',
    description: (
      <>
        This is a preview of the next generation Doit International Help
        Center.
      </>
    ),
  },
  {
    title: 'Under construction',
    description: (
      <>
        This is a preview of the next generation Doit International Help
        Center.
      </>
    ),
  },
  {
    title: 'Under construction',
    description: (
      <>
        This is a preview of the next generation Doit International Help
        Center.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ThemedImage
          alt="DoiT International"
          height="81"
          sources={{
            light: logoBlackUrl,
            dark: logoWhiteUrl,
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
