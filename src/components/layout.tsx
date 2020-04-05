import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Header from './header';

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
`;

type Props = {
  children?: string;
};

export default function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <HeaderMargin />
      <main>{children}</main>
      <footer>©2020, Cilvia333 / All rights Reserved.</footer>
    </>
  );
}

const HeaderMargin = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;
