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
        // Generic icons
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/generic/icons/16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/generic/icons/32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/generic/icons/194x194.png"
        />
        // Apple icons
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple/icons/touch.png"
        />
        <link
          rel="mask-icon"
          href="/meta/apple/icons/mask.svg"
          color="#1a1c1e"
        />
        // PWA manifest
        <link rel="manifest" href="/meta/pwa/manifest.json" />
        // App config
        <meta name="application-name" content="DoiT Help Center" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="apple-mobile-web-app-title"
          content="DoiT Help Center"
        />
        <meta
          name="msapplication-config"
          content="/meta/msapplication/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        // Generic values
        <meta
          name="description"
          content="User guides, how-tos, FAQs, and more"
        />
        // Open Graph values
        <meta property="og:title" content="DoiT Help Center" />
        <meta
          property="og:description"
          content="User guides, how-tos, FAQs, and more"
        />
        <meta property="og:url" content={url + '/'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={url + '/meta/og/image.png'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        // Twitter values
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url.split('//')[1]} />
        <meta property="twitter:url" content={url + '/'} />
        <meta name="twitter:title" content="DoiT Help Center" />
        <meta
          name="twitter:description"
          content="User guides, how-tos, FAQs, and more"
        />
        <meta name="twitter:image" content={url + '/meta/og/image.png'} />
      </Head>
      <Layout {...props} />
    </>
  );
}
