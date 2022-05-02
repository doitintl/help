import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SpotlightFeatures from '@site/src/components/SpotlightFeatures';
import ContactSupport from '@site/src/components/ContactSupport';
import LearnMore from '@site/src/components/LearnMore';
import GettingStarted from '@site/src/components/GettingStarted';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero_banner)}>
      <h1 className={styles.hero_title}>How can we help you?</h1>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.main}>
        <GettingStarted />
        <SpotlightFeatures />
        <LearnMore />
        <ContactSupport />
      </main>
    </Layout>
  );
}
