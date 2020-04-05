import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';

const header = css({
  marginBottom: `1.45rem`,
  backgroundColor: `#ddd`,
});

const wrapper = css({
  margin: `0 auto`,
  padding: `1.45rem 1.0875rem`,
  display: `flex`,
  justifyContent: `space-between`,
});

const title = css({
  margin: 0,
});

const link = css({
  color: `white`,
  textDecoration: `none`,
});

const menu = css({
  display: `flex`,
  justifyContent: `space-between`,
  li: {
    marginLeft: `10px`,
  },
});

type Props = {
  siteTitle: string;
};

function Header({ siteTitle = `` }: Props) {
  return (
    <header css={header}>
      <div css={wrapper}>
        <h1 css={title}>
          <Link to="/" css={link}>
            {siteTitle}
          </Link>
        </h1>
        <ul css={menu}>
          <li>
            <Link to="/">works</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
