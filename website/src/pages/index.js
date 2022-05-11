import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SpotlightFeatures from '@site/src/components/SpotlightFeatures';
import ContactSupport from '@site/src/components/ContactSupport';
import LearnMore from '@site/src/components/LearnMore';
import GettingStarted from '@site/src/components/GettingStarted';
import Header from '@site/src/components/Header';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Header />
      <main className={styles.main}>
        <GettingStarted />
        <SpotlightFeatures />
        <LearnMore />
        <ContactSupport />
      </main>
    </Layout>
  );
}
