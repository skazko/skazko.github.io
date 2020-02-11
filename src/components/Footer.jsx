import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 40px;
`;

 const Footer = () => (
  <StyledFooter>
    <NavLink to={'/about/'}>About</NavLink>
    <NavLink to={'/contact/'}>Котакты</NavLink>
  </StyledFooter>
);

export default Footer;