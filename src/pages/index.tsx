import React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Card from '../components/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Colors } from '../assets/styles/constants';
import { Orbit } from '../components/contents/orbit';

const mock = [
  [
    { name: 'Orbit', link: 'orbit', component: Orbit },
    { name: 'Orbit', link: 'orbit', component: Orbit },
    { name: 'Orbit', link: 'orbit', component: Orbit },
    { name: 'Orbit', link: 'orbit', component: Orbit },
    { name: 'Orbit', link: 'orbit', component: Orbit },
    { name: 'Orbit', link: 'orbit', component: Orbit },
  ],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
  [{ name: 'Orbit', link: 'orbit', component: Orbit }],
];

export default function IndexPage() {
  const [logoSize, setLogoSize] = useState(
    (document.documentElement.clientWidth - 550) / 18
  );
  useEffect(() => {
    setLogoSize((document.documentElement.clientWidth - 550) / 18);
  }, [document.documentElement.clientWidth]);

  return (
    <Layout>
      <SEO title="WebMotionTable" />
      <Wrapper>
        {mock.map((items, i) => (
          <CardWrapper key={`group${i}`}>
            {items.map((item, j) => (
              <Card name={item.name} link={item.link} key={`item${i}_${j}`}>
                <Orbit size={logoSize} isAnimation={true} />
              </Card>
            ))}
          </CardWrapper>
        ))}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
