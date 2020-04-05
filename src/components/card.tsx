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
          <Title>{name}</Title>
          {children}
        </Wrapper>
      </CardLink>
    </>
  );
}

const CardLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  ${Fonts.h3}
  color: ${Colors.white};
  margin-bottom: 10px;
`;
