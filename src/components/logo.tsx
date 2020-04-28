import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { Colors, Fonts } from '../assets/styles/constants';

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <>
      <Wrapper className={className}>
        <Title>
          Web Motion
          <br />
          Periodic Table
        </Title>
        <SubTitle>ウェブモーション周期表</SubTitle>
        <TitleText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor vitae
          porta parturient purus nunc, <br />
          Venenatis quam dui dictum consequat. Volutpat lectus ut diam lectus
          molestie ut vitae.
        </TitleText>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  ${Fonts.h1}
  color: ${Colors.white};
  text-align:center;
  margin:0;
  line-height:48px;
`;

const SubTitle = styled.h2`
  ${Fonts.h2}
  color: ${Colors.black};
  background-color: ${Colors.white};
  display: inline;
  text-align:center;
  line-height:32px;
  padding:0;
  margin:0;
`;

const TitleText = styled.p`
  ${Fonts.cap}
  color: ${Colors.white};
  text-align:center;
`;
