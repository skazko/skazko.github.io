import React from 'react';
import NavLink from '../NavLink';
import StyledNavigation from './Navigation.styled';

 const Navigation = () => (
  <StyledNavigation>
    <NavLink to={'/about/'}>About</NavLink>
    <NavLink to={'/contact/'}>Контакты</NavLink>
  </StyledNavigation>
);

export default Navigation;
