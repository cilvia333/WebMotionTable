import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Colors, Fonts } from '../assets/styles/constants';

type Props = {
  name: string;
  link: string;
  size: number;
  logo: JSX.Element;
};

export default function Card({ name, link, size, logo }: Props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const logoWithProps = React.cloneElement(logo, {
    size: size,
    isAnimation: isMouseOver,
  });
  return (
    <>
      <CardLink
        to={`/content/${link}/`}
        onMouseOver={e => setIsMouseOver(true)}
        onMouseOut={e => setIsMouseOver(false)}
      >
        <Wrapper>
          <BackGround size={size} isHover={isMouseOver} />
          {logoWithProps}
          <Title>{name}</Title>
        </Wrapper>
      </CardLink>
    </>
  );
}

const CardLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.gray};
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BackGround = styled.div<{ size: number; isHover: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  &::before {
    content: '';
    position: absolute;
    background-color: ${Colors.red};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-out;

    ${({ size }) =>
      css`
        height: ${size * 3}px;
        width: ${size * 3}px;
      `}

    ${({ isHover }) =>
      isHover &&
      css`
        transform: scale(1);
      `}
  }
`;

const Title = styled.div`
  ${Fonts.text}
  font-weight: 500;
  color: ${Colors.white};
  vertical-align: middle;
  height: 30px;
`;
