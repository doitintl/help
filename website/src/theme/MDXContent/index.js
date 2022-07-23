import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
export default function MDXContent({ children }) {
  return (
    <div className="markdown-content">
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </div>
  );
}
