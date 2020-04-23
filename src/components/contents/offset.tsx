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

type svgProp = {
  isAnimation: boolean;
};

const SvgTriangle = ({ isAnimation }: svgProp) => (
  <SvgWrapper>
    <StyledSvg
      height={`400px`}
      width={`400px`}
      viewBox="0 0 400 400"
      isAnimation={isAnimation}
    >
      <polygon points="200,80 40,360 360,360" className="triangle" />
    </StyledSvg>
  </SvgWrapper>
);

export function Offset({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <Triangle size={size ?? 10}>
          <SvgTriangle isAnimation={isAnimation ?? false} />
        </Triangle>
      </Wrapper>
    </>
  );
}

const offsetRotate = keyframes`
  0% {
    stroke-dashoffset: 40;
  }
  20% {
    stroke-dashoffset: 40;
  }
  70% {
    stroke-dashoffset: -600;
  }
  100% {
    stroke-dashoffset: -600;
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
    margin-top: 20px;

    ${({ size }) =>
      css`
        border-right: ${(size / 10) * 2}px solid transparent;
        border-bottom: ${(size / 5) * 0.85 * 2}px solid ${Colors.white};
        border-left: ${(size / 10) * 2}px solid transparent;
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
const StyledSvg = styled.svg<{ isAnimation: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  stroke: ${Colors.white};
  stroke-width: 30px;
  stroke-linecap: round;
  stroke-dasharray: 250 70;
  stroke-dashoffset: 40;
  fill: transparent;

  ${({ isAnimation }) =>
    isAnimation &&
    css`
      animation: ${offsetRotate} 1.3s cubic-bezier(0, 0.81, 0.38, 0.99) infinite;
    `}
`;
