import React from 'react';
import { Link } from 'gatsby';
import { Title, LinkTitle } from './Title';

const Logo = ({children}) => {
  const isHome = window.location.pathname === '/';
  if (isHome) {
    return (
      <Title>
        {children}
      </Title>
    );
  } else {
    return (
      <LinkTitle as={Link} to={'/'}>
        {children}
      </LinkTitle>
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
