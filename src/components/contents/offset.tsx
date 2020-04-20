import anime from 'animejs';
import React from 'react';
import { useEffect } from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';

type Prop = {
  size?: number;
  isAnimation?: boolean;
};

const svgTriangle = () => (
  <svg height="100%" width="100%">
    <polygon points="250,60 100,400 400,400" className="triangle" />
  </svg>
);

export function Offset({ size, isAnimation }: Prop) {
  const svgTriangleRef = React.useRef(null);
  const triangleRef = React.createRef<HTMLDivElement>();
  const path = anime.path(svgTriangleRef);
  let timeline: anime.AnimeTimelineInstance;
  useEffect(() => {
    if (isAnimation) {
      timeline = anime
        .timeline({
          targets: triangleRef.current,
          autoplay: false,
        })
        .add({
          translateX: path('x'),
          translateY: path('y'),
          rotate: path('angle'),
        });
    }
  }, [isAnimation]);
  useEffect(() => {
    if (isAnimation) timeline.play();
  }, [isAnimation]);
  return (
    <>
      <Wrapper>
        <Triangle size={size ?? 10}>
          <svg height="100%" width="100%">
            <polygon points="250,60 100,400 400,400" className="triangle" />
          </svg>
        </Triangle>
      </Wrapper>
    </>
  );
}

const orbitRotate = keyframes`
  0% {
   transform: rotate(-45deg);
  }
  10% {
   transform: rotate(-45deg);
  }
  70% {
    transform: rotate(315deg);
  }
  100% {
   transform: rotate(315deg);
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  position: relative;
`;

const Triangle = styled.div<{ size: number }>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0;

    ${({ size }) =>
      css`
        border-right: ${(size / 10) * 3}px solid transparent;
        border-bottom: ${(size / 5) * 0.85 * 3}px solid ${Colors.white};
        border-left: ${(size / 10) * 3}px solid transparent;
        margin-top: ${size / 5}px;
      `}
  }
`;

const Fan = styled.div<{
  size: number;
  duration: number;
  isAnimation: boolean;
}>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: block;
  transform: rotate(-45deg);
`;

const FanTriangle = styled(svgTriangle)`
  stroke: 2px solid ${Colors.white};
`;
