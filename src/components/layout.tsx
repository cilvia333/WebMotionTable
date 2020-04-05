import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
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

const headerMarginStyle = css({
  margin: `0 auto`,
  maxWidth: 960,
  padding: `0px 1.0875rem 1.45rem`,
  paddingTop: 0,
});

type Props = {
  children: string;
};

function Layout({ children }: Props) {
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
      <div css={headerMarginStyle}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Cilvia333 / All rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default Layout;
