import React from 'react';
import Footer from '@theme-original/Footer';
import JsonLd from '@site/src/components/JsonLd';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <JsonLd />
    </>
  );
}
