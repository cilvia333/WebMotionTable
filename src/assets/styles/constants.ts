import { css } from '@emotion/core';

export const Colors = {
  white: '#F0EDEE',
  black: '#0A090C',
  red: '#B80C09',
  orange: '#FAA916',
  yellow: '#FED766',
  green: '#0B4F6C',
  blue: '#0B4F6C',
};

const h1 = css`
  font-weight: bold;
  font-size: 32px;
`;

const h2 = css`
  font-weight: bold;
  font-size: 24px;
`;

const h3 = css`
  font-weight: bold;
  font-size: 16px;
`;

const text = css`
  font-weight: normal;
  font-size: 16px;
`;

export const Fonts = {
  h1,
  h2,
  h3,
  text,
} as const;
