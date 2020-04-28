import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, Wrapper, ContentWrapper, centering } from './commonComponents';

export function TrimPie({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <ContentWrapper size={size}>
          <FanLeft size={size} duration={2} isAnimation={isAnimation}>
            <FanInner size={size} />
          </FanLeft>
          <FanRight size={size} duration={2} isAnimation={isAnimation}>
            <FanInner size={size} />
          </FanRight>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const trimRightAnimation = keyframes`
  5% {
   transform: rotate(45deg);
  }
  22.5% {
   transform: rotate(180deg);
  }
`;

const trimLeftAnimation = keyframes`
  22.5% {
   transform: rotate(0deg);
  }
  50% {
   transform: rotate(180deg);
  }
`;

const expandRightAnimation = keyframes`
  50% {
   transform: rotate(-180deg);
  }
  72.5% {
   transform: rotate(0deg);
  }
`;

const expandLeftAnimation = keyframes`
  72.5% {
   transform: rotate(-180deg);
  }
  90% {
   transform: rotate(0deg);
  }
`;

const Fan = styled.div<{
  size: number;
  duration: number;
  isAnimation: boolean;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: block;
`;

const FanInner = styled.div<{ size: number }>`
  width: 100%;
  height: 100%;
  ${centering}
  box-sizing: border-box;
  background: ${Colors.white};
  border-radius: 50%;
`;

const FanLeft = styled(Fan)`
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  transform: rotate(0deg);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${trimLeftAnimation} ${duration}s cubic-bezier(0.5, 0, 0, 1.23)
          infinite forwards,
        ${expandLeftAnimation} ${duration}s cubic-bezier(1, -0.27, 0.46, 0.98)
          infinite forwards;
    `}
`;

const FanRight = styled(Fan)`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transform: rotate(45deg);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${trimRightAnimation} ${duration}s
          cubic-bezier(0.5, 0, 0, 1.23) infinite forwards,
        ${expandLeftAnimation} ${duration}s cubic-bezier(1, -0.27, 0.46, 0.98)
          infinite forwards;
    `}
`;
