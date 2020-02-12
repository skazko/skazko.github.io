import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Title, LinkTitle } from './Title';

const SiteTitleContainer = ({children}) => {
  const [home, setHome] = useState(false);

  useEffect(() => {
    setHome(window.location.pathname === '/')
  }, []);

  if (home) {
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
