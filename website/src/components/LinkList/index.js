import React from 'react';

import styles from './styles.module.css';

const LinkList = ({ list }) => {
  const linkNodes = list.links.map((link, i) => (
    <li key={i}>
      <a href={link.href}>{link.text}</a>
    </li>
  ));
  return (
    <div className={`col ${styles.link_list}`}>
      <ul>{linkNodes}</ul>
    </div>
  );
};

export default LinkList;
