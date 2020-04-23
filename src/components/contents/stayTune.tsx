import React from 'react';
import styled from '@emotion/styled';
import { Colors, Fonts } from '../../assets/styles/constants';

export function StayTune() {
  return (
    <>
      <Wrapper>
        <Text>
          Stay
          <br />
          Tune!!!
        </Text>
      </Wrapper>
    </>
  );
}

const size = '80px';

const Wrapper = styled.div`
  padding: 10px;
`;

const Text = styled.div`
  height: ${size};
  width: ${size};
  ${Fonts.h3}
  color: ${Colors.white};
  text-align: center;
  border-radius: 50%;
  border: 1px solid ${Colors.white};
`;
