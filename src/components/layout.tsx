import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Header from './header';
import Footer from './footer';
import { Colors, Fonts } from '../assets/styles/constants';

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.black};

    font-family: 'Avenir Next', 'Helvetica neue', Helvetica, 'Noto Sans JP',
      '游ゴシック', YuGothic, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro',
      メイリオ, Meiryo, 'ＭＳ Ｐゴシック', sans-serif;

    & * {
      box-sizing: border-box;
    }
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${Colors.white};
  }
`;

type Props = {
  children?: JSX.Element[];
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
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  height: calc(100vh - 65px);
  overflow: hidden;
`;
