import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Colors, Fonts } from '../assets/styles/constants';

type Props = {
  name: string;
  link: string;
  children: React.ReactNode;
};

export default function Card({ name, link, children }: Props) {
  return (
    <>
      <CardLink to={`/content/${link}/`}>
        <Wrapper>
          {children}
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
`;

const Title = styled.div`
  ${Fonts.text}
  font-weight: 500;
  color: ${Colors.white};
  vertical-align: middle;
  height: 30px;
`;
