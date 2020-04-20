import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';

type Prop = {
  size?: number;
  isAnimation?: boolean;
};

export function Offset({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <Triangle size={size ?? 10}>
          <Fan size={size} duration={2} isAnimation={isAnimation ?? false}>
            <FanOuter>
              <FanBottomInner />
              <FanRightInner />
              <FanLeftInner />
            </FanOuter>
          </Fan>
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
  //clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${orbitRotate} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const FanOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(45deg);
`;

const FanInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-bottom: 3px solid ${Colors.white};
`;

const FanBottomInner = styled(FanInner)`
  transform: rotate(0deg);
`;

const FanLeftInner = styled(FanInner)`
  transform: rotate(120deg);
`;

const FanRightInner = styled(FanInner)`
  transform: rotate(-120deg);
`;
