import React from 'react';
import { Link } from 'gatsby';

const Logo = ({children}) => {
  const isHome = window.location.pathname === '/';
  if (isHome) {
    return (
      <h1>
        {children}
      </h1>
    );
  } else {
    return (
      <Link to={'/'}>
        {children}
      </Link>
    );
  }
};

export default () => (
  <Logo>
    {'Казаченко'}
    <br/>
    {'Вячеслав'}
  </Logo>
);
