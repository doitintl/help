import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';

import styles from './styles.module.css';

const youTubeEmbedUrl = 'https://www.youtube.com/embed/';
const loomEmbedUrl = 'https://loom.com/embed/';

const youTubeThumbUrl = 'https://i.ytimg.com/vi/';
const loomThumbUrl = 'https://cdn.loom.com/sessions/thumbnails/';

const lazyLoadProps = {
  offset: 200,
  unmountIfInvisible: true,
};

export default function VideoEmbed(props) {
  const { type, id, thumb } = props;
  const ref = React.createRef();

  let embedUrl = '';
  let thumbUrl = '';

  switch (type) {
    case 'youtube':
      embedUrl = youTubeEmbedUrl + id;
      thumbUrl = 'url(' + youTubeThumbUrl + id + '/sddefault.jpg)';
      break;
    case 'loom':
      embedUrl = loomEmbedUrl + id;
      if (thumb) {
        thumbUrl = 'url(' + loomThumbUrl + id + thumb + ')';
      }
      break;
    default:
      throw new Error('Invalid video type');
  }

  let thumbStyle = {};
  if (thumbUrl) {
    thumbStyle = {
      backgroundImage: thumbUrl,
      backgroundSize: '100% auto',
    };
  }

  return (
    <div className={styles.videoContainer}>
      <LazyLoad
        className={styles.lazyLoad}
        style={thumbStyle}
        {...lazyLoadProps}>
        <div className={styles.videoEmbed}>
          <iframe
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            ref={ref}></iframe>
        </div>
      </LazyLoad>
    </div>
  );
}
