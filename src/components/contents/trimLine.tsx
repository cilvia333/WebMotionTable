import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, ContentWrapper, centering } from './commonComponents';

export function TrimLine({ size, isAnimation }: Prop) {
  return (
    <>
      <CustomWrapper>
        <ContentWrapper size={size}>
          <BrokenLine />
          <Line duration={1.5} isAnimation={isAnimation} />
        </ContentWrapper>
      </CustomWrapper>
    </>
  );
}

const CustomWrapper = styled.div`
  padding: 10px 0px;
`;

const trimAnimation = keyframes`
  0% {
    transform-origin: top left;
    transform: scaleX(0.7);
  }
  10% {
    transform-origin: top left;
    transform: scaleX(1);
  }
  20% {
    transform-origin: top right;
    transform: scaleX(1);
  }
  50% {
    transform-origin: top right;
    transform: scaleX(0);
  }
  60% {
    transform-origin: top left;
    transform: scaleX(0);
  }
  100% {
    transform-origin: top left;
    transform: scaleX(0.7);
  }
`;

const Line = styled.div<{ duration: number; isAnimation: boolean }>`
  ${centering}
  height: 20%;
  width: 100%;
  background-color: ${Colors.white};
  transform-origin: top left;
  transform: scaleX(0.7);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${trimAnimation} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const BrokenLine = styled.div`
  ${centering}
  height: 15%;
  width: 100%;
  background-image: repeating-linear-gradient(
    -45deg,
    ${Colors.white},
    ${Colors.white} 10%,
    transparent 10%,
    transparent 20%
  );
`;
