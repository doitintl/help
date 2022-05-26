import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const IconCard = ({ card }) => (
  <div className={`col ${styles.icon_card}`}>
    <Link to={card.href} className={styles.icon_card_inner}>
      <card.image />
      <p className={styles.icon_card_title}>{card.title}</p>
    </Link>
  </div>
);

export default IconCard;
