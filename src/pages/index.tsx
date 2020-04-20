import React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Card from '../components/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Colors } from '../assets/styles/constants';
import { Orbit } from '../components/contents/orbit';
import { Offset } from '../components/contents/offset';
import { LineWeight } from '../components/contents/lineWeight';

type CardItem = {
  name: string;
  link: string;
  component: JSX.Element;
};

const mock: CardItem[][] = [
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Offset', link: 'offset', component: <Offset /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
  [
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Offset', link: 'offset', component: <Offset /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
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
            {items.reverse().map((item, j) => (
              <Card
                name={item.name}
                link={item.link}
                key={`item${i}_${j}`}
                size={logoSize}
                logo={item.component}
              />
            ))}
          </CardWrapper>
        ))}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  height: 100%;
  column-gap: 5px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  height: 100%;
  gap: 10px;
  align-content: end;

  *:nth-child(1) {
    grid-row: 6/7;
  }
  *:nth-child(2) {
    grid-row: 5/6;
  }
  *:nth-child(3) {
    grid-row: 4/5;
  }
  *:nth-child(4) {
    grid-row: 3/4;
  }
  *:nth-child(5) {
    grid-row: 2/3;
  }
  *:nth-child(6) {
    grid-row: 1/2;
  }
`;
