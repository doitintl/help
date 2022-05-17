import React, { useEffect } from 'react';
import clsx from 'clsx';
import ReactIdealImage from '@endiliey/react-ideal-image';
import Zooming from 'zooming';

import styles from './index.module.css';

// This component was swizzled (and modified) from the
// `docusaurus-plugin-ideal-image` package to hack in support for `zooming`
// and customize UI design
// https://github.com/facebook/docusaurus/

// Use of the `zooming` library was inspired by the
// `docusaurus-plugin-image-zoom` package (which is, unfortunately,
// incompatible with `docusaurus-plugin-image-zoom` without modifications to
// both to account for state changes)
// https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom

const idealImageTheme = {
  placeholder: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const zoomingConfig = {
  zIndex: 2000,
  bgOpacity: 1,
  enableGrab: false,
  customSize: '100%',
};

class idealImageMod {
  constructor(img, alt, ref) {
    this.img = img;
    this.alt = alt;
    this.ref = ref;
  }

  get container() {
    return this.ref.current;
  }

  get mounted() {
    return this.container ? true : false;
  }

  get active() {
    return this.icon !== 'noicon' ? true : false;
  }

  get interactive() {
    return ['error', 'load'].includes(this.icon);
  }

  get loaded() {
    return this.state.loadState === 'loaded' ? true : false;
  }

  get largestSrc() {
    return this.img.src.images.at(-1);
  }

  get largestWidth() {
    return this.getNaturalSize(this.largestSrc.width);
  }

  get largestHeight() {
    return this.getNaturalSize(this.largestSrc.height);
  }

  get pickedWidth() {
    return this.getNaturalSize(this.state.pickedSrc.width);
  }

  get pickedHeight() {
    return this.getNaturalSize(this.state.pickedSrc.height);
  }

  getNaturalSize(size) {
    // Compensate for 2x resolution source images
    return Math.round(size / 2);
  }

  setPickedSize(node) {
    node.setAttribute('width', this.pickedWidth);
    node.setAttribute('height', this.pickedHeight);
  }

  setNaturalSize(node) {
    node.setAttribute('naturalWidth', this.largestWidth);
    node.setAttribute('naturalHeight', this.largestHeight);
    node.setAttribute('data-original', this.largestSrc.path);
    node.setAttribute('data-zooming-width', this.largestWidth);
    node.setAttribute('data-zooming-height', this.largestHeight);
  }

  handleDiv(node) {
    node.classList.add('icon');
    if (this.interactive) {
      node.style.cursor = 'pointer';
    }
    if (this.alt) {
      node.setAttribute('title', this.alt);
    }
    const svg = node.parentNode.querySelector('svg');
    this.handleSvg(svg);
  }

  handleSvg(node) {
    if (this.loaded) {
      node.style.display = 'none';
    } else {
      node.style.maxWidth = 'min(' + this.pickedWidth + 'px, 100%)';
    }
  }

  handleImg(node) {
    this.setPickedSize(node);
    this.setNaturalSize(node);
    this.zoom.listen(node);
  }

  handleMutations(mutations) {
    const mod = this;
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeName === 'DIV') {
          mod.handleDiv(node);
        }
        if (node.nodeName === 'IMG') {
          mod.handleImg(node);
        }
      });
    });
  }

  setup() {
    // Compensate for 2x resolution source images
    this.zoom = new Zooming(zoomingConfig);
    const manager = this;
    this.observer = new MutationObserver(function (mutations, observer) {
      manager.handleMutations(mutations);
    });
    this.observer.observe(this.container, {
      childList: true,
      subtree: true,
    });
  }

  tearDown() {
    delete this.zoom;
    if (this.observer) {
      this.observer.disconnect();
    }
    delete this.observer;
  }

  stateHook() {
    if (!this.mounted) return;
    if (this.active) {
      this.setup();
    } else {
      this.tearDown();
    }
  }

  getMessage(icon, state) {
    this.icon = icon;
    this.state = state;
    this.stateHook();
  }
}

function getFallbackPath(obj) {
  // The webpack loader wasn't used
  if (typeof obj === 'string') return obj;
  // The default webpack loader was used (e.g., we are running in development)
  if ('default' in obj) return obj.default;
  // The plugin's webpack loader was used, so we don't need to provide a
  // fallback path
  return null;
}

export default function IdealImage(props) {
  const { alt, img, frame } = props;
  const ref = React.createRef();
  const fallbackPath = getFallbackPath(img);

  if (fallbackPath !== null) {
    // The fallback doesn't know what to do with the `img` prop
    var newProps = { ...props };
    delete newProps.img;

    useEffect(() => {
      if (!ref.current) return;
      const div = ref.current;
      const img = div.querySelector(':scope img');
      const scaledWidth = Math.round(img.naturalWidth / 2);
      const scaledHeight = Math.round(img.naturalHeight / 2);
      img.width = scaledWidth;
      img.height = scaledHeight;
      img.setAttribute('data-zooming-width', scaledWidth);
      img.setAttribute('data-zooming-height', scaledHeight);
      if (!ref.current.zoom) {
        div.zoom = new Zooming(zoomingConfig);
        div.zoom.listen(img);
      }
    });

    return (
      <div className={clsx(frame, styles.idealImageContainer)} ref={ref}>
        <img
          src={fallbackPath}
          alt={alt}
          title={alt}
          className={styles.devImage}
          {...newProps}
        />
      </div>
    );
  }

  const mod = new idealImageMod(img, alt, ref);
  const width = mod.largestWidth;
  const height = mod.largestHeight;
  function getMessage(icon, state) {
    mod.getMessage(icon, state);
  }

  return (
    <div className={clsx(frame, styles.idealImageContainer)} ref={ref}>
      <ReactIdealImage
        {...props}
        alt={alt}
        title={alt}
        className={styles.idealImage}
        theme={idealImageTheme}
        width={width}
        height={height}
        placeholder={{ lqip: img.preSrc }}
        src={img.src.src}
        srcSet={img.src.images.map((image) => ({
          ...image,
          src: image.path,
        }))}
        threshold={5000}
        getMessage={getMessage}
      />
    </div>
  );
}
