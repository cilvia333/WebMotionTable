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
  const [circle, setCircle] = useState<animType>();
  const logoWithProps = React.cloneElement(logo, {
    size: size,
    isAnimation: isMouseOver,
  });
  const cardRef = React.createRef<HTMLDivElement>();
  const { elX, elY, elW, elH } = useMouse(cardRef);
  const canvasRef = React.createRef<HTMLCanvasElement>();
  //let ctx: CanvasRenderingContext2D | null;
  const checkRange = (value: number, ref: number): number => {
    if (value < 0) return 0;
    else if (value > ref) return ref;
    else return value;
  };
  const createCircle = (x: number, y: number, radius: number) => {
    const canvas = canvasRef.current;
    if (!canvas || canvas === undefined) return;
    const ctx = canvas.getContext('2d');
    const p: animType = {
      x: x,
      y: y,
      color: Colors.orange,
      radius: 0,
      draw: function() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      },
    };
    return p;
  };

  const expandCircle = (x: number, y: number) => {
    anime.timeline().add({
      targets: circle,
      x: { value: x, duration: 0 },
      y: { value: y, duration: 0 },
      radius: [0, 200],
      duration: 300,
      easing: 'easeInExpo',
      update: anim => {
        for (let i = 0; i < anim.animatables.length; i++) {
          anim.animatables[i].target.draw();
        }
      },
    });
  };

  const closeCircle = (x: number, y: number) => {
    anime.timeline().add({
      targets: circle,
      x: { value: x, duration: 0 },
      y: { value: y, duration: 0 },
      radius: [200, 0],
      duration: 300,
      easing: 'easeOutExpo',
      update: anim => {
        for (let i = 0; i < anim.animatables.length; i++) {
          anim.animatables[i].target.draw();
        }
      },
    });
  };
  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && canvas !== undefined) {
      canvas.width = elW;
      canvas.height = elH;
      canvas.style.width = `${elW}px`;
      canvas.style.height = `${elH}px`;
      setCircle(createCircle(0, 0, 0.1));
    }
  }, [elW, elH]);

  return (
    <>
      <CardLink to={`/content/${link}/`}>
        <Wrapper
          onMouseEnter={e => {
            expandCircle(checkRange(elX, elW), checkRange(elY, elH));
            setIsMouseOver(true);
          }}
          onMouseLeave={e => {
            closeCircle(checkRange(elX, elW), checkRange(elY, elH));
            setIsMouseOver(false);
          }}
        >
          <Canvas ref={canvasRef} />
          <ContentWrapper ref={cardRef}>
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
