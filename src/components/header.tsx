import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const CustomHeader = styled.header`
  margin-bottom: 1.45rem;
  background-color: #ddd;
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
            <Link to="/">works</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </Menu>
      </Wrapper>
    </CustomHeader>
  );
}

export default Header;
