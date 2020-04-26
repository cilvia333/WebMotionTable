import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, Wrapper } from './commonComponents';

export function Blur({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <CircleWrapper size={size ?? 10}>
          <Square01 />
          <ClipCircle duration={2} isAnimation={isAnimation}>
            <Square02 />
          </ClipCircle>
        </CircleWrapper>
      </Wrapper>
    </>
  );
}

const moveClipAnim = keyframes`
  0% {
    clip-path: polygon(-10% -10%, 50% -10%, 50% 110%, -10% 110%);
  }
  10% {
    clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%);
  }
  10% {
    clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%);
  }
  70% {
    clip-path: polygon(-10% -10%, -10% -10%, -10% 110%, -10% 110%);
  }
  100% {
    clip-path: polygon(-10% -10%, 50% -10%, 50% 110%, -10% 110%);
  }
`;

const CircleWrapper = styled.div<{ size: number }>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: relative;
`;

const Square = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: ${Colors.white};
  border-radius: 50%;
`;

const Square01 = styled(Square)`
  filter: blur(0);
`;

const ClipCircle = styled.div<{
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
  clip-path: polygon(-10% -10%, 50% -10%, 50% 110%, -10% 110%);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${moveClipAnim} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const Square02 = styled(Square)`
  filter: blur(5px);
`;
