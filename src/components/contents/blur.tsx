import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, Wrapper } from './commonComponents';

export function Blur({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <SquareWrapper size={size ?? 10}>
          <Square01
            size={size ?? 10}
            duration={3}
            isAnimation={isAnimation ?? false}
          />
          <Square02
            size={size ?? 10}
            duration={3}
            isAnimation={isAnimation ?? false}
          />
        </SquareWrapper>
      </Wrapper>
    </>
  );
}

const blur01 = keyframes`
  0% {
   filter: blur(0);
  }
  10% {
    filter: blur(0);
  }
  70% {
    filter: blur(3px);
  }
  100% {
    filter: blur(0);
  }
`;

const blur02 = keyframes`
  0% {
   filter: blur(3px);
  }
  10% {
    filter: blur(3px);
  }
  70% {
    filter: blur(0);
  }
  100% {
    filter: blur(3px);
  }
`;

const SquareWrapper = styled.div<{ size: number }>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: relative;
`;

const Square = styled.div<{
  size: number;
  duration: number;
  isAnimation: boolean;
}>`
  ${({ size }) =>
    css`
      height: ${size / 2}px;
      width: ${size / 2}px;
    `}
  position: absolute;
  background: ${Colors.white};

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${duration}s cubic-bezier(0, 0.47, 0.43, 1) infinite;
    `}
`;

const Square01 = styled(Square)`
  top: 10px;
  left: 10px;
  filter: blur(0);
  animation-name: ${blur01};
`;

const Square02 = styled(Square)`
  bottom: 10px;
  right: 10px;
  filter: blur(3px);
  animation-name: ${blur02};
`;
