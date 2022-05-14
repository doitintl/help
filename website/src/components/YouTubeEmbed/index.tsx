import React from 'react';

import styles from './styles.module.css';

interface Props {
  id: string;
}

export default function YouTubeEmbed({ id = '' }: Props): JSX.Element {
  return (
    <div className={styles.youtubeEmbed}>
      <iframe
        src={'https://www.youtube.com/embed/' + id}
        frameBorder="0"
        allowFullScreen></iframe>
    </div>
  );
}
