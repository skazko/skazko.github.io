import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import SiteLogo from './SiteLogo';

const Header = styled.header`
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;
`;

export default () => (
  <Header>
    <SiteLogo />
    <NavLink to={'/about/'}>About</NavLink>
  </Header>
)