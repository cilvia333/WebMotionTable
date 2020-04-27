import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, Wrapper, ContentWrapper, centering } from './commonComponents';

const SvgFilter = () => (
  <SvgWrapper>
    <StyledSvg>
      <filter id="rough-0" height="1.4" width="1.4">
        <feTurbulence
          baseFrequency="0.12"
          numOctaves="2"
          type="fractalNoise"
          result="result1"
          seed="0"
        />
        <feDisplacementMap
          in2="result1"
          scale="99"
          result="result2"
          xChannelSelector="R"
          in="SourceGraphic"
        />
        <feComposite in2="result2" in="SourceGraphic" operator="in" />
      </filter>
      <filter id="turbulent-1">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="1"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
      <filter id="turbulent-2">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="2"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
      <filter id="turbulent-3">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="3"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
      <filter id="turbulent-4">
        <feTurbulence
          type="turbulence"
          id="turbulence"
          baseFrequency="0 0.6"
          numOctaves="10"
          result="noise"
          seed="4"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" />
      </filter>
    </StyledSvg>
  </SvgWrapper>
);

export function RoughEdge({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <SvgFilter />
        <Triangle size={size ?? 10} isAnimation={isAnimation ?? false} />
      </Wrapper>
    </>
  );
}

const fractalNoiseAnimation = keyframes`
  0% {
    filter:url('#rough-0');
  }
  25% {
    filter:url('#rough-1');
  }
  50% {
    filter:url('#rough-2');
  }
  75% {
    filter:url('#rough-3');
  }
  100% {
    filter:url('#rough-4');
  }
`;

const Triangle = styled.div<{ size: number; isAnimation: boolean }>`
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
    margin-top: 10px;
    filter: url('#rough-0');

    ${({ isAnimation }) =>
      isAnimation &&
      css`
        animation: ${fractalNoiseAnimation} 0.34s linear infinite;
      `}

    ${({ size }) =>
      css`
        border-right: ${size / 2}px solid transparent;
        border-bottom: ${size * 0.85}px solid ${Colors.white};
        border-left: ${size / 2}px solid transparent;
      `}
  }
`;

const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
`;
const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  display: hidden;
`;
