import React from 'react';
import { Link } from 'gatsby';
import { Title, LinkTitle } from './Title';

const SiteTitleContainer = ({children}) => {
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

const SiteTitle = () => (
  <SiteTitleContainer>
    {'Казаченко'}
    <br/>
    {'Вячеслав'}
  </SiteTitleContainer>
);

export default SiteTitle;
