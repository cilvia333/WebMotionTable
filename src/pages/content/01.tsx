import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../../components/layout';
import Image from '../../components/image';
import SEO from '../../components/seo';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="01 Orbit" />
      <h1>Orbit</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/content/01/">Go to 01</Link>
    </Layout>
  );
}
