import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop } from './commonComponents';

export function Move({ size, isAnimation }: Prop) {
  return (
    <>
      <SquareWrapper size={size ?? 10}>
        <MoveSquare
          size={size ?? 10}
          duration={3}
          isAnimation={isAnimation ?? false}
        >
          <Square size={size ?? 10} />
        </MoveSquare>
      </SquareWrapper>
    </>
  );
}

const move01 = keyframes`
  0% {
   transform: translateX(0);
  }
  25% {
    transform: translateX(180%);
  }
  75% {
    transform: translateX(-180%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SquareWrapper = styled.div<{ size: number }>`
  ${({ size }) =>
    css`
      height: ${size + 5}px;
      width: ${size + 5}px;
    `}
  position: relative;
  overflow: hidden;
`;

const MoveSquare = styled.div<{
  size: number;
  duration: number;
  isAnimation: boolean;
}>`
  ${({ size }) =>
    css`
      height: ${size / 3}px;
      width: ${size / 1.5}px;
    `}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: translateX(0);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${move01} ${duration}s cubic-bezier(0, 0.02, 1, 0.98) infinite;
    `}
`;

const Square = styled.div<{
  size: number;
}>`
  ${({ size }) =>
    css`
      height: ${size / 3}px;
      width: ${size / 3}px;
    `}
  position: absolute;
  background: ${Colors.white};
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto 0;
`;
