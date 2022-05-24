import React from 'react';
import clsx from 'clsx';
import Search from '@site/src/components/Search';

import styles from './styles.module.css';

const Header = () => (
  <header className={clsx('hero hero--primary', styles.hero_banner)}>
    <h1 className={styles.hero_title}>How can we help?</h1>
    <Search />
  </header>
);

export default Header;
