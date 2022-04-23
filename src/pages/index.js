import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout>
      <h1>My Fantastic Blog</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
