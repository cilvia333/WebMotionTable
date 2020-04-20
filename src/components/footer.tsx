import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { Colors, Fonts } from '../assets/styles/constants';

export default function Footer() {
  return (
    <CustomFooter>
      <Wrapper>
        <Title>©2020, Cilvia333 / All rights Reserved.</Title>
        <BarCode />
      </Wrapper>
    </CustomFooter>
  );
}

const CustomFooter = styled.footer`
  text-align: center;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin: 0;
  text-align: center;
`;

const Title = styled.h3`
  color: ${Colors.white};
  ${Fonts.h4}
  text-align: center;
  margin: 0;
`;
const BarCode = styled.div`
  display: inline-block;
  height: 20px;
  width: 250px;
  margin-top: 10px;
  background-image: repeating-linear-gradient(
    -45deg,
    ${Colors.white},
    ${Colors.white} 5%,
    transparent 5%,
    transparent 10%
  );
`;
