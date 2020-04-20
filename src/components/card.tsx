import anime from 'animejs';
import React from 'react';
import { useState, useEffect } from 'react';
import { useEffectOnce, useMouse } from 'react-use';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Colors, Fonts } from '../assets/styles/constants';

type animType = {
  x: number;
  y: number;
  color: string;
  radius: number;
  alpha?: number;
  lineWidth: number;
  draw: Function;
};

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
  const cardRef = React.createRef<HTMLDivElement>();
  const backgroundRef = React.createRef<HTMLDivElement>();
  const { elX, elY, elW, elH } = useMouse(cardRef);
  const canvasRef = React.createRef<HTMLCanvasElement>();
  let ctx: CanvasRenderingContext2D | null;
  let timeline: anime.AnimeTimelineInstance;
  let timeline2: anime.AnimeTimelineInstance;
  const createCircle = (x, y, radius) => {
    const p: animType = {
      x: x,
      y: y,
      color: '#FFF',
      radius: radius,
      lineWidth: 0,
      draw: function() {
        if (!ctx) return;
        ctx.globalAlpha = p.alpha;
        ctx?.beginPath();
        ctx?.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
        //ctx.lineWidth = p.lineWidth;
        //ctx.strokeStyle = p.color;
        //ctx?.stroke();
        //ctx.globalAlpha = 1;
      },
    };
    return p;
  };

  const animateCircle = (x: number, y: number) => {
    if (isMouseOver) {
      const circle = createCircle(x, y, 0.1);
      timeline2 = anime.timeline().add({
        targets: circle,
        radius: 800,
        duration: 300,
        easing: 'easeOutExpo',
        update: anim => {
          for (let i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
          }
        },
        offset: 0,
      });
    } else {
      const circle = createCircle(x, y, 800);
      timeline2 = anime.timeline().add({
        targets: circle,
        radius: 0,
        duration: 300,
        easing: 'easeInExpo',
        update: anim => {
          for (let i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
          }
        },
        offset: 0,
      });
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      ctx = canvas?.getContext('2d');
      canvas.width = elW;
      canvas.height = elH;
      canvas.style.width = `${elW}px`;
      canvas.style.height = `${elH}px`;
    }
  });

  useEffect(() => {
    animateCircle(elX, elY);
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
    //timeline.play();
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
        <Wrapper>
          <Canvas ref={canvasRef} />
          <ContentWrapper ref={cardRef}>
            {/* <BackGround size={size} ref={backgroundRef} /> */}
            {logoWithProps}
            <Title>{name}</Title>
          </ContentWrapper>
        </Wrapper>
      </CardLink>
    </>
  );
}

const CardLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: ${Colors.gray};
  height: 100%;
  width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
