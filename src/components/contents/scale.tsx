import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, Wrapper, ContentWrapper, centering } from './commonComponents';

export function Scale({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <ContentWrapper size={size}>
          <BigSquare duration={1.5} isAnimation={isAnimation} />
          <SmallSquare />
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const BigSquare = styled.div<{ duration: number; isAnimation: boolean }>`
  height: 80%;
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  border: 3px solid ${Colors.white};
  transform-origin: bottom left;
  transform: scale(1);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${scaleAnimation} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const SmallSquare = styled.div`
  height: 40%;
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 3px solid ${Colors.white};
`;
