import React from 'react';
import LinkList from '../LinkList';

import styles from './styles.module.css';

const lists = [
  {
    links: [
      {
        text: 'this is a on link list',
        href: '/test/foo',
      },
      {
        text: 'this is a on link list',
        href: '/test/bar',
      },
    ],
  },
  {
    links: [
      {
        text: 'this is a on link list',
        href: '/test/baz',
      },
      {
        text: 'this is a on link list',
        href: '/test/boz',
      },
    ],
  },
  {
    links: [
      {
        text: 'this is a on link list',
        href: '/test/boop',
      },
      {
        text: 'this is a on link list',
        href: '/test/beep',
      },
    ],
  },
];

const LearnMore = () => {
  return (
    <section className={styles.learn_more}>
      <div className="container">
        <h2>Learn more</h2>
        <div className="row">
          {lists.map((list, i) => (
            <LinkList key={i} list={list}></LinkList>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LearnMore;
