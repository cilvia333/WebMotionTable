import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';

type Prop = {
  size?: number;
  isAnimation?: boolean;
};

export function LineWeight({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <LineWrapper size={size}>
          <Line01 size={size} duration={2} isAnimation={isAnimation ?? false} />
          <Line02 size={size} duration={2} isAnimation={isAnimation ?? false} />
          <Line03 size={size} duration={2} isAnimation={isAnimation ?? false} />
        </LineWrapper>
      </Wrapper>
    </>
  );
}

const lineWeight01 = keyframes`
  0% {
   height: 3px;
  }
  10% {
    height: 3px;
  }
  70% {
    height: 20px;
  }
  100% {
    height: 3px;
  }
`;

const lineWeight02 = keyframes`
  0% {
   height: 10px;
  }
  10% {
    height: 10px;
  }
  70% {
    height: 15px;
  }
  100% {
    height: 10px;
  }
`;

const lineWeight03 = keyframes`
  0% {
   height: 20px;
  }
  10% {
    height: 20px;
  }
  70% {
    height: 3px;
  }
  100% {
    height: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  position: relative;
`;

const LineWrapper = styled.div<{ size: number }>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div<{
  size: number;
  duration: number;
  isAnimation: boolean;
}>`
  ${({ size }) =>
    css`
      width: ${size}px;
    `}
  background: ${Colors.white};
  transform: translateY(0) scaleY(1);
  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${duration}s cubic-bezier(0, 0.47, 0.43, 1) infinite;
    `}
`;

const Line01 = styled(Line)`
  height: 3px;
  animation-name: ${lineWeight01};
`;

const Line02 = styled(Line)`
  height: 10px;
  animation-name: ${lineWeight02};
`;

const Line03 = styled(Line)`
  height: 20px;
  animation-name: ${lineWeight03};
`;
