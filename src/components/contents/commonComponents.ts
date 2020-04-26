import { css } from '@emotion/core';
import styled from '@emotion/styled';

export type Prop = {
  size?: number;
  isAnimation?: boolean;
};

export const Wrapper = styled.div`
  padding: 10px;
  position: relative;
`;

export const ContentWrapper = styled.div<{ size: number }>`
  ${({ size }) =>
    css`
      height: ${size}px;
      width: ${size}px;
    `}
  position: relative;
`;

export const centering = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
