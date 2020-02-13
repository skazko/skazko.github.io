import React, { useState } from 'react';
import SiteTitle from '../SiteTitle';
import DarkModeToggler from '../DarkModeToggler';
import Navigation from '../Navigation';
import StyledHeader from './Header.styled';
import Burger from '../Burger';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <DarkModeToggler />
      <SiteTitle />
      <Burger open={open} setOpen={setOpen}/>
      <Navigation open={open} setOpen={setOpen}/>
      <DarkModeToggler desktop />
    </StyledHeader>
  );
};

export default Header;
