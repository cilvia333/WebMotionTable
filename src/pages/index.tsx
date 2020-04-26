import React from 'react';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import styled from '@emotion/styled';
import Card from '../components/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Colors, Fonts } from '../assets/styles/constants';
import { Orbit } from '../components/contents/orbit';
import { Offset } from '../components/contents/offset';
import { LineWeight } from '../components/contents/lineWeight';
import { Blur } from '../components/contents/blur';
import { DoF } from '../components/contents/dof';
import { FractalNoise } from '../components/contents/fractalNoise';
import { Move } from '../components/contents/move';
import { TurbulentDisplace } from '../components/contents/turbulentDisplace';

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
    { name: 'Blur', link: 'blur', component: <Blur /> },
    { name: 'Depth of Field', link: 'dof', component: <DoF /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Move', link: 'move', component: <Move /> },
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
    {
      name: 'Fractal Noise',
      link: 'fractalNoise',
      component: <FractalNoise />,
    },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    {
      name: 'Turbulent Displace',
      link: 'turbulentDisplace',
      component: <TurbulentDisplace />,
    },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
    { name: 'Orbit', link: 'orbit', component: <Orbit /> },
  ],
];

export default function IndexPage() {
  const { width: windowWidth } = useWindowSize();
  const [logoSize, setLogoSize] = useState(0);
  useEffect(() => {
    setLogoSize((windowWidth - 1000) / 18);
  }, [windowWidth]);

  return (
    <Layout>
      <SEO title="WebMotionTable" />
      <Wrapper>
        {mock.map((items, i) => (
          <CardWrapper key={`group${i}`}>
            {items
              .slice()
              .reverse()
              .map((item, j) => (
                <Card
                  name={item.name}
                  link={item.link}
                  key={`item${i}_${j}`}
                  size={logoSize}
                  logo={item.component}
                />
              ))}
            <GroupButton>Group01</GroupButton>
          </CardWrapper>
        ))}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 48px 48px;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  height: 100%;
  column-gap: 10px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr) 10px;
  height: 100%;
  gap: 10px;
  align-content: end;

  a:nth-of-type(1) {
    grid-row: 6/7;
  }
  a:nth-of-type(2) {
    grid-row: 5/6;
  }
  a:nth-of-type(3) {
    grid-row: 4/5;
  }
  a:nth-of-type(4) {
    grid-row: 3/4;
  }
  a:nth-of-type(5) {
    grid-row: 2/3;
  }
  a:nth-of-type(6) {
    grid-row: 1/2;
  }
`;

const GroupButton = styled.div`
  ${Fonts.h3}
  color: ${Colors.gray};
  text-align: center;
  grid-row: 7/8;
  cursor: pointer;
`;
