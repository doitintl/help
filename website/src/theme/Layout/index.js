import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LayoutWrapper(props) {
  const {
    siteConfig: { url, tagline },
  } = useDocusaurusContext();
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#1a1c1e"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="DoiT Help Center"
        />
        <meta name="application-name" content="DoiT Help Center" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image:width" content="1852" />
        <meta property="og:image:height" content="970" />
        <meta property="og:title" content="DoiT Help Center" />
        <meta
          property="og:description"
          content="User guides, how-tos, FAQs, and more"
        />
        <meta property="og:url" content={url + '/'} />
        <meta property="og:image" content={url + '/og-image.jpg'} />
      </Head>
      <Layout {...props} />
    </>
  );
}
