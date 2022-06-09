import React from 'react';
import clsx from 'clsx';
import Search from '@site/src/components/Search';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

export default function Header() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.hero_banner)}>
      <h1 className={styles.hero_title}>{siteConfig.tagline}</h1>
      <Search />
    </header>
  );
}
