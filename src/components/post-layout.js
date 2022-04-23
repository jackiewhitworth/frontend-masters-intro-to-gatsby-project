import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout.js';

export default function PostLayout({ children, ...props }) {
  return (
    <Layout>
      {children}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
}
