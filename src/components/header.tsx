import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { Colors } from '../assets/styles/constants';

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
  margin: 0;
`;

const TitileLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li: {
    margin-left: 10px;
  }
`;

type Props = {
  siteTitle: string;
};

function Header({ siteTitle = `` }: Props) {
  return (
    <CustomHeader>
      <Wrapper>
        <Title>
          <TitileLink to="/">{siteTitle}</TitileLink>
        </Title>
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

export default Header;
