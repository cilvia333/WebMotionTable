import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';
import { Prop, Wrapper, ContentWrapper, centering } from './commonComponents';

export function Rotate({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <ContentWrapper size={size}>
          <FanLeft size={size} duration={2} isAnimation={isAnimation}>
            <FanLeftOuter size={size}>
              <FanInner size={size} />
            </FanLeftOuter>
          </FanLeft>
          <FanRight size={size} duration={2} isAnimation={isAnimation}>
            <FanRightOuter size={size}>
              <FanInner size={size} />
            </FanRightOuter>
          </FanRight>
          <OrbitalBox duration={2} isAnimation={isAnimation}>
            <OrbitalPoint size={size} />
          </OrbitalBox>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const rotateAnimation = keyframes`
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
  transform: rotate(-45deg);

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${rotateAnimation} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const FanOuter = styled.div<{ size: number }>`
  width: 100%;
  height: 100%;
  ${centering}
`;

const FanInner = styled.div<{ size: number }>`
  width: 100%;
  height: 100%;
  ${centering}
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px solid ${Colors.white};
`;

const FanLeft = styled(Fan)`
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
`;

const FanLeftOuter = styled(FanOuter)`
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  transform: rotate(0deg);
`;

const FanRight = styled(Fan)`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
`;

const FanRightOuter = styled(FanOuter)`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transform: rotate(50deg);
`;

const OrbitalBox = styled.div<{ duration: number; isAnimation: boolean }>`
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: -25%;
  transform-origin: center 150%;
  transform: rotate(-45deg);
  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${rotateAnimation} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const OrbitalPoint = styled.div<{ size: number }>`
  position: absolute;
  top: 22%;
  left: 0;
  bottom: 0;
  margin: auto;
  border-top: 3px solid ${Colors.white};
  border-right: 3px solid ${Colors.white};
  height: 50%;
  width: 50%;
  transform: rotate(35deg);
`;
