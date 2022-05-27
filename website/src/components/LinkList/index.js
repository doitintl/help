import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const LinkList = ({ list }) => {
  const linkNodes = list.links.map((link, i) => (
    <li key={i}>
      <Link to={link.href}>{link.text}</Link>
    </li>
  ));
  return (
    <div className={`col ${styles.link_list}`}>
      <h4>{list.heading}</h4>
      <ul>{linkNodes}</ul>
    </div>
  );
};

export default LinkList;
