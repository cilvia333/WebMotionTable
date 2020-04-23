import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';

type Prop = {
  size?: number;
  isAnimation?: boolean;
};

export function Orbit({ size, isAnimation }: Prop) {
  return (
    <>
      <Wrapper>
        <Circle size={size}>
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
        </Circle>
      </Wrapper>
    </>
  );
}

export function AdvancedOrbit1() {
  return (
    <>
      <Wrapper>
        <AdvancedCircle>
          <AdvancedCross />
          <OrbitalBox duration={2} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
          <OrbitalBox duration={5} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
          <OrbitalBox duration={8} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
        </AdvancedCircle>
      </Wrapper>
    </>
  );
}

export function AdvancedOrbit2() {
  return (
    <>
      <Wrapper>
        <AdvancedCircle>
          <AdvancedCross />
          <OrbitalBox duration={2} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
          <OrbitalBox duration={5} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
          <OrbitalBox duration={8} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
        </AdvancedCircle>
      </Wrapper>
    </>
  );
}

export function AdvancedOrbit3() {
  return (
    <>
      <Wrapper>
        <AdvancedCircle>
          <AdvancedCross />
          <OrbitalBox duration={2} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
          <OrbitalBox duration={5} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
          <OrbitalBox duration={8} isAnimation={true}>
            <OrbitalPoint size={10} />
          </OrbitalBox>
        </AdvancedCircle>
      </Wrapper>
    </>
  );
}

const contsize = '70px';

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

const Circle = styled.div<{
  size: number;
}>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: relative;

  &::after {
    content: '';
    ${({ size }) =>
      css`
        height: ${(size / 5) * 3}px;
        width: ${(size / 5) * 3}px;
      `}
    border-radius: 50%;
    background-color: ${Colors.white};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
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

  ${({ duration, isAnimation }) =>
    isAnimation &&
    css`
      animation: ${orbitRotate} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const FanOuter = styled.div<{ size: number }>`
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
`;

const FanInner = styled.div<{ size: number }>`
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
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px solid ${Colors.white};
`;

const FanLeft = styled(Fan)`
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
`;

const FanLeftOuter = styled(FanOuter)`
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  transform: rotate(-30deg);
`;

const FanRight = styled(Fan)`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
`;

const FanRightOuter = styled(FanOuter)`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transform: rotate(30deg);
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
      animation: ${orbitRotate} ${duration}s cubic-bezier(0, 0.47, 0.43, 1)
        infinite;
    `}
`;

const OrbitalPoint = styled.div<{ size: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  background-color: ${Colors.white};
  ${({ size }) =>
    css`
      height: ${size / 5}px;
      width: ${size / 5}px;
    `}
`;

const AdvancedCircle = styled.div`
  height: ${contsize};
  width: ${contsize};
  border-radius: 50%;
  border: 1px solid ${Colors.white};
  position: relative;

  &::before {
    content: '';
    height: 50%;
    width: 50%;
    border-radius: 50%;
    border: 2px solid ${Colors.white};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  &::after {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    border: 2px solid ${Colors.white};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const AdvancedCross = styled.div`
  height: ${contsize};
  width: ${contsize};
  position: relative;

  &::before {
    content: '';
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${Colors.white},
      ${Colors.white} 3px,
      transparent 3px,
      transparent 8px
    );
    background-repeat: repeat-x;
    background-size: 8px 1px;

    position: absolute;
    top: 50%;
    left: 0;
  }

  &::after {
    content: '';
    height: 100%;
    width: 1px;
    background-image: linear-gradient(
      to bottom,
      ${Colors.white},
      ${Colors.white} 3px,
      transparent 3px,
      transparent 8px
    );
    background-repeat: repeat-y;
    background-size: 1px 8px;

    position: absolute;
    top: 0;
    left: 50%;
  }
`;
