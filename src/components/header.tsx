import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { Colors, Fonts } from '../assets/styles/constants';

export default function Header() {
  return (
    <CustomHeader>
      <Wrapper>
        <TitleWrapper>
          <TitleLink to="/">
            <Title>Web Motion Periodic Table</Title>
          </TitleLink>
          <TitleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            vitae porta parturient purus nunc, <br />
            Venenatis quam dui dictum consequat. Volutpat lectus ut diam lectus
            molestie ut vitae.
          </TitleText>
        </TitleWrapper>
        <Menu>
          <li>
            <MenuLink to="/about">about</MenuLink>
          </li>
          <li>
            <MenuLink to="/profile">twitter</MenuLink>
          </li>
          <li>
            <MenuLink to="/contacts">facebook</MenuLink>
          </li>
        </Menu>
      </Wrapper>
    </CustomHeader>
  );
}

const CustomHeader = styled.header`
  height: 65px;
  background-color: ${Colors.white};
  z-index: 4;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  ${Fonts.h2}
  color: ${Colors.black};
`;

const TitleLink = styled(Link)`
  font-size: 24px;
`;

const TitleText = styled.p`
  ${Fonts.cap}
  color: ${Colors.black};
  margin-left: 16px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin-left: 10px;
  }
`;

const MenuLink = styled(Link)`
  color: ${Colors.black};
  ${Fonts.h3}
`;
