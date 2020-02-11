import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import SiteTitle from './SiteTitle';
import DarkModeToggler from './DarkModeToggler';

const StyledHeader = styled.header`
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;
`;

 const Header = ({ theme, setTheme }) => (
  <StyledHeader>
    <SiteTitle />
    <NavLink to={'/about/'}>About</NavLink>
    <NavLink to={'/contact/'}>Котакты</NavLink>
    <DarkModeToggler theme={theme} setTheme={setTheme} />
  </StyledHeader>
);

export default Header;
