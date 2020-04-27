import React from 'react';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { css, keyframes } from '@emotion/core';
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
import { Rotate } from '../components/contents/rotate';
import { RoughEdge } from '../components/contents/roughEdge';
import { Scale } from '../components/contents/scale';
import { TrimLine } from '../components/contents/trimLine';
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
    { name: 'Rotate', link: 'rotate', component: <Rotate /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Scale', link: 'scale', component: <Scale /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
    { name: 'Line Weight', link: 'lineWeight', component: <LineWeight /> },
  ],
  [
    { name: 'Trim Line', link: 'trimLine', component: <TrimLine /> },
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
    { name: 'Rough Edge', link: 'roughEdge', component: <RoughEdge /> },
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
  const backgroundTriangles = [];
  const maxDelayTime = 10;
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 12; j++) {
      const delay = (maxDelayTime / 25 / 12) * i * j;
      backgroundTriangles.push(
        <BackgroundTriangle delay={delay} isAnimation={true} />
      );
    }
  }

  return (
    <Layout>
      <SEO title="WebMotionTable" />
      <BackgroundWrapper>
        {backgroundTriangles.slice().reverse()}
      </BackgroundWrapper>
      <Wrapper>
        {mock.map((items, i) => (
          <>
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
            </CardWrapper>
            <GroupButton>{`Group${i + 1}`}</GroupButton>
          </>
        ))}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 48px 48px;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: 1fr 10px;
  height: 100%;
  gap: 10px;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  height: 140%;
  width: 120%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(12, 1fr);
  transform: rotate(-3deg);
  z-index: -1;
`;

const backAnimation = keyframes`
  0% {
    transform: translate(0);
  }
  15% {
    transform: translate(10px,10px);
  }
  20% {
    transform: translate(0);
  }
  100% {
    transform: translate(0);
  }
`;

const BackgroundTriangle = styled.div<{
  delay: number;
  isAnimation: boolean;
}>`
  width: 0;
  height: 0;
  margin: 20px;
  transform: rotate(-5deg);
  border-right: 15px solid transparent;
  border-bottom: 25.5px solid ${Colors.darkGray};
  border-left: 15px solid transparent;

  ${({ delay, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${backAnimation} 8s cubic-bezier(0, 0.47, 0.43, 1) ${delay}s
        infinite;
    `}
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
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
  grid-row: 2/3;
  cursor: pointer;
`;
