import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {
  Orbit,
  AdvancedOrbit1,
  AdvancedOrbit2,
  AdvancedOrbit3,
} from '../../components/contents/orbit';

export default function OrbitPage() {
  return (
    <Layout>
      <SEO title="Orbit" />
      <Wrapper>
        <h1>Orbit</h1>
        <p>
          オブジェクトを軌道上で回転させるモーション。
          良く使われるモーションのうちの1つ。
          オブジェクトの中心で回転するのではなく、基点をずらして回転させることによって得られるモーション。
        </p>
        <Orbit size={200} isAnimation={true} />
        <TopLink to="/">Go to 01</TopLink>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 100px;
`;

const TopLink = styled(Link)`
  padding-top: 40px;
`;
