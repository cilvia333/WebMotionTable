import { css } from '@emotion/core';

export const Colors = {
  white: '#FFFFFF',
  black: '#0A0A0A',
  darkGray: '#171717',
  gray: '#363636',
  red: '#B80C09',
  orange: '#FAA916',
  yellow: '#FED766',
  green: '#0B4F6C',
  blue: '#0B4F6C',
};

const h1 = css`
  font-weight: bold;
  font-size: 48px;
`;

const h2 = css`
  font-weight: bold;
  font-size: 24px;
`;

const h3 = css`
  font-weight: 500;
  font-size: 16px;
`;

const h4 = css`
  font-weight: 500;
  font-size: 12px;
`;

const text = css`
  font-weight: normal;
  font-size: 16px;
`;

const cap = css`
  font-weight: normal;
  font-size: 6px;
`;

export const Fonts = {
  h1,
  h2,
  h3,
  h4,
  text,
  cap,
} as const;
