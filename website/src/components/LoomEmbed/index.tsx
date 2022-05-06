import React from 'react';

import styles from './styles.module.css';

interface Props {
  id: string;
}

export default function LoomEmbed({ id = '' }: Props): JSX.Element {
  return (
    <div className={styles.loomEmbed}>
      <iframe
        src={'https://www.loom.com/embed/' + id}
        frameBorder="0"
        allowFullScreen></iframe>
    </div>
  );
}
