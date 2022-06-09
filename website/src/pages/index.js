import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import SpotlightFeatures from '@site/src/components/SpotlightFeatures';
import ContactSupport from '@site/src/components/ContactSupport';
import LearnMore from '@site/src/components/LearnMore';
import GettingStarted from '@site/src/components/GettingStarted';
import Header from '@site/src/components/Header';

import styles from './index.module.css';

export default function homePage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.tagline} t>
      <Header />
      <main id="front-page" className={styles.main}>
        <GettingStarted />
        <SpotlightFeatures />
        <LearnMore />
        <ContactSupport />
      </main>
    </Layout>
  );
}
