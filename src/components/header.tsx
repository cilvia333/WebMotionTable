import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { Colors, Fonts } from '../assets/styles/constants';

type Props = {
  siteTitle: string;
};

export default function Header({ siteTitle = `` }: Props) {
  return (
    <CustomHeader>
      <Wrapper>
        <TitileLink to="/">
          <Title>{siteTitle}</Title>
        </TitileLink>
        <Menu>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/profile">twitter</Link>
          </li>
          <li>
            <Link to="/contacts">facebook</Link>
          </li>
        </Menu>
      </Wrapper>
    </CustomHeader>
  );
}

const CustomHeader = styled.header`
  margin-bottom: 1.45rem;
  background-color: ${Colors.black};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  ${Fonts.h1}
`;

const TitileLink = styled(Link)`
  font-size: 32px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    color: ${Colors.white};
    ${Fonts.text}
    margin-left: 10px;
  }
`;
