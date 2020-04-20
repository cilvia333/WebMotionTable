import anime from 'animejs';
import React from 'react';
import { useState, useEffect } from 'react';
import { useMouse } from 'react-use';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const logoWithProps = React.cloneElement(logo, {
    size: size,
    isAnimation: isMouseOver,
  });
  const cardRef = React.createRef<HTMLDivElement>();
  const backgroundRef = React.createRef<HTMLDivElement>();
  const { elX, elY, elW, elH } = useMouse(cardRef);
  let timeline: anime.AnimeTimelineInstance;
  useEffect(() => {
    if (isMouseOver) {
      timeline = anime
        .timeline({
          targets: backgroundRef.current,
          autoplay: false,
        })
        .add({
          translateX: {
            value: `${elX}px`,
            duration: 0,
          },
          translateY: {
            value: `${elY}px`,
            duration: 0,
          },
          scale: {
            value: [0, 10],
            duration: 200,
            delay: 0,
            easing: 'easeInOutQuart',
          },
          opacity: {
            value: [0, 1],
            duration: 200,
            delay: 0,
            easing: 'easeInOutQuart',
          },
        });
    } else {
      timeline = anime
        .timeline({
          targets: backgroundRef.current,
          autoplay: false,
        })
        .add({
          translateX: {
            value: `${elX}px`,
            duration: 0,
          },
          translateY: {
            value: `${elY}px`,
            duration: 0,
          },
          scale: {
            value: [10, 0],
            duration: 200,
            delay: 0,
            easing: 'easeInOutQuart',
          },
          opacity: {
            value: [1, 0],
            duration: 200,
            delay: 0,
            easing: 'easeInOutQuart',
          },
        });
    }
  }, [isMouseOver]);

  useEffect(() => {
    timeline.play();
  }, [isMouseOver]);

  return (
    <>
      <CardLink
        to={`/content/${link}/`}
        onMouseEnter={e => {
          setIsMouseOver(true);
        }}
        onMouseLeave={e => {
          setIsMouseOver(false);
        }}
      >
        <Wrapper ref={cardRef}>
          <BackGround size={size} ref={backgroundRef} />
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

const BackGround = styled.div<{ size: number }>`
  position: absolute;
  background-color: ${Colors.red};
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: scale(0);
  opacity: 0;

  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
`;

const Title = styled.div`
  ${Fonts.text}
  font-weight: 500;
  color: ${Colors.white};
  vertical-align: middle;
  height: 30px;
`;
