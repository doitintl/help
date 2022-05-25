import React from 'react';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

const IconCard = ({ card }) => (
  <div className={`col ${styles.icon_card}`}>
    <a href={card.href} className={styles.icon_card_inner}>
      <card.image />
      <p className={styles.icon_card_title}>{card.title}</p>
    </a>
  </div>
);

export default IconCard;
