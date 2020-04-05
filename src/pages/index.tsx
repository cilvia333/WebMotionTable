import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const spacingStyle = css({
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
});

function IndexPage() {
  return (
    <Layout>
      <SEO title="works" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className={spacingStyle}>
        <Image />
      </div>
      <Link to="/about/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage;
