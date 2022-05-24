import React from 'react';
import LinkList from '../LinkList';

import styles from './styles.module.css';

const lists = [
  {
    links: [
      {
        text: 'this is a on link list',
        href: '/test',
      },
      {
        text: 'this is a on link list',
        href: '/test',
      },
    ],
  },
  {
    links: [
      {
        text: 'this is a on link list',
        href: '/test',
      },
      {
        text: 'this is a on link list',
        href: '/test',
      },
    ],
  },
  {
    links: [
      {
        text: 'this is a on link list',
        href: '/test',
      },
      {
        text: 'this is a on link list',
        href: '/test',
      },
    ],
  },
];

const LearnMore = () => {
  return (
    <div className={styles.learn_more_wrapper}>
      <h1>Learn more</h1>
      <div className={styles.learn_more_container}>
        {lists.map((list, i) => (
          <LinkList key={i} list={list}></LinkList>
        ))}
      </div>
    </div>
  );
};
export default LearnMore;
