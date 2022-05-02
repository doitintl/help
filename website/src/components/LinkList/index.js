import React from 'react';

import styles from './styles.module.css';

const LinkList = ({ list }) => {
  const linkNodes = list.links.map((link) => (
    <a href={link.href}>{link.text}</a>
  ));
  return <div className={styles.link_list}>{linkNodes}</div>;
};

export default LinkList;
