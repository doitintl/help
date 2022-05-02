import React from 'react';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

const IconCard = ({ card }) => (
  <div className={styles.icon_card}>
    <ThemedImage
      alt={card.imageAlt}
      height="81"
      sources={{
        light: card.image,
      }}
    />
    <p className={styles.icon_card_title}>{card.title}</p>
  </div>
);

export default IconCard;
