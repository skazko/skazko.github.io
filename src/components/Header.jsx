import React from 'react';
import NavLink from './NavLink';
import SiteLogo from './SiteLogo';

export default () => (
  <header>
    <SiteLogo />
    <NavLink to={'/about/'}>About</NavLink>
  </header>
)