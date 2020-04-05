import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Colors } from '../../assets/styles/constants';

export function Orbit() {
  return (
    <>
      <Wrapper>
        <Circle>
          <OrbitalBox duration={6}>
            <OrbitalPoint color={Colors.white} />
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
          <OrbitalBox duration={2}>
            <OrbitalPoint color={Colors.orange} />
          </OrbitalBox>
          <OrbitalBox duration={5}>
            <OrbitalPoint color={Colors.orange} />
          </OrbitalBox>
          <OrbitalBox duration={8}>
            <OrbitalPoint color={Colors.orange} />
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
          <OrbitalBox duration={2}>
            <OrbitalPoint color={Colors.red} />
          </OrbitalBox>
          <OrbitalBox duration={5}>
            <OrbitalPoint color={Colors.red} />
          </OrbitalBox>
          <OrbitalBox duration={8}>
            <OrbitalPoint color={Colors.red} />
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
          <OrbitalBox duration={2}>
            <OrbitalPoint color={Colors.yellow} />
          </OrbitalBox>
          <OrbitalBox duration={5}>
            <OrbitalPoint color={Colors.yellow} />
          </OrbitalBox>
          <OrbitalBox duration={8}>
            <OrbitalPoint color={Colors.yellow} />
          </OrbitalBox>
        </AdvancedCircle>
      </Wrapper>
    </>
  );
}

const size = '80px';

const orbitRotate = keyframes`
  0% {
   transform: rotate(0deg);
  }
  100% {  
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const Circle = styled.div`
  height: ${size};
  width: ${size};
  border-radius: 50%;
  border: 1px solid ${Colors.white};
  position: relative;
`;

const OrbitalBox = styled.div<{ duration: number }>`
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: -25%;
  transform-origin: center 150%;
  ${({ duration }) =>
    css`
      animation: ${orbitRotate} ${duration}s linear infinite;
    `}
`;

const OrbitalPoint = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}
`;

const AdvancedCircle = styled.div`
  height: ${size};
  width: ${size};
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
  height: ${size};
  width: ${size};
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
